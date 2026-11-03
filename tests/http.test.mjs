import { test, before, after } from 'node:test'
import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { readdir, readFile } from 'node:fs/promises'
import { setTimeout } from 'node:timers/promises'
import { createServer } from 'node:net'
import { machines } from '../src/features/site-templates/catalog/manufacturing/content/machines.ts'
import { manufacturingTemplate } from '../src/features/site-templates/catalog/manufacturing/meta.ts'
const probe = createServer()
await new Promise(resolve => probe.listen(0, '127.0.0.1', resolve))
const port = probe.address().port
await new Promise(resolve => probe.close(resolve))
const origin = `http://127.0.0.1:${port}`
let child, output = ''
before(async () => {
  child = spawn(process.execPath, ['scripts/next.mjs', 'start'], { env: { ...process.env, PORT: String(port) }, stdio: ['ignore', 'pipe', 'pipe'] })
  child.stdout.on('data', bytes => { output += bytes }); child.stderr.on('data', bytes => { output += bytes })
  for (let i=0;i<100;i++) { if(child.exitCode !== null) throw new Error(output); if(output.includes('Ready in')){const response=await fetch(origin);assert.equal(response.status,200);return} await setTimeout(150) }
  throw new Error('服务启动超时\n'+output)
})
after(async () => { if(child && child.exitCode === null){child.kill('SIGTERM');await new Promise(resolve=>child.once('exit',resolve))} })
test('全部双语页面真实 HTTP 响应与模板身份',async()=>{
  for(const locale of ['zh','en'])for(const page of manufacturingTemplate.surfaces[0].pages){const path=`${locale==='en'?'/en':''}${page.slug?'/'+page.slug:''}`||'/';const response=await fetch(origin+path);assert.equal(response.status,200,path);const html=await response.text();assert.match(html,/data-template="manufacturing"/);if(locale==='en'){const visible=html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<a\b[^>]*class="dt-language"[^>]*>[\s\S]*?<\/a>/g,'');assert.deepEqual(visible.match(/[\u3400-\u9fff]+/g)??[],[],'英文页面不应残留中文（语言切换入口除外）: '+path);}assert.equal((html.replace(/<script[\s\S]*?<\/script>/g,'').match(/<h1(?:\s|>)/g)??[]).length,1,'每页仅一个主标题: '+path);assert.doesNotMatch(html.replace(/<script[\s\S]*?<\/script>/g,''),/>undefined<|>NaN<|Internal Server Error/)}
})
test('未知页面明确返回 404',async()=>{for(const path of ['/unknown-page','/en/unknown-page'])assert.equal((await fetch(origin+path)).status,404)})
test('全部运行图片与字体通过真实服务加载',async()=>{
  const walk=async prefix=>{const entries=await readdir('public'+prefix,{withFileTypes:true});return(await Promise.all(entries.map(e=>e.isDirectory()?walk(prefix+'/'+e.name):[prefix+'/'+e.name]))).flat()}
  for(const path of await walk('/templates/manufacturing')){if(!/\.(jpg|png|webp|svg|mp4|woff2|css)$/.test(path))continue;const response=await fetch(origin+path);assert.equal(response.status,200,path);assert.ok((await response.arrayBuffer()).byteLength>0,path)}
  const source=await readFile('src/features/site-templates/catalog/manufacturing/theme.css','utf8');assert.doesNotMatch(source,/https:\/\//)
})

// 预期关系来自参考站实际筛选结果，防止按设备名称推测分类造成回归。
test('设备分类与原站六项筛选一致',()=>{
 const expected={
  'cnc-milling':['5-axis VMC 750','Horizontal HMC 630','Vertical VMC 1600','Mill-turn MT 2500','Wire EDM W 600','Surface grinder SG 1224'],
  'cnc-turning':['Turning center TC 400','Swiss lathe SL 32','Bandsaw BS 330'],
  'sheet-metal':['Fiber laser FL 6kW','Press brake PB 170'],
  'welding-fabrication':['Robotic weld cell RW 2'],
  assembly:['Bridge CMM 1210'],finishing:['Blast cabinet BC 48'],
 }
 for(const[group,names]of Object.entries(expected))assert.deepEqual(machines.filter(m=>m.groups.includes(group)).map(m=>m.name),names,group)
})
