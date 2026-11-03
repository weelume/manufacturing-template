import Link from 'next/link'
import type { SiteTemplatePageProps } from '../../../types'
import { getPage } from '../content/catalog'
import { Shell } from '../components/Shell'
import { Article } from '../components/Article'
import { CTA,PageHeader,Heading } from '../components/Common'
import { EquipmentTable } from '../components/EquipmentTable'
import { ProjectGrid } from '../components/Cards'
import { Reveal } from '../components/Motion'
function Capability({slug,locale='zh',basePath}:SiteTemplatePageProps&{slug:string}){const page=getPage('capabilities/'+slug);return <Shell locale={locale} basePath={basePath}><PageHeader page={page} locale={locale} basePath={basePath}/><Reveal className="dt-wrap" scale><img className="dt-page-photo" src={page.images[0]} alt={page.title[locale]}/></Reveal><section className="dt-wrap dt-section dt-detail-row"><Article page={page} locale={locale}/><aside className="dt-glass dt-side-card"><h3>{locale==='zh'?'能力参数':'Capability specifications'}</h3><dl>{page.specs.map(s=><div key={s.label.en}><dt>{s.label[locale]}</dt><dd>{s.value[locale]}</dd></div>)}</dl><Link href={`${basePath}/quote`} className="dt-button">{locale==='zh'?'讨论你的图纸':'Request a quote'}</Link></aside></section>{page.images.length>1&&<div className="dt-wrap dt-two-grid dt-photo-pair">{page.images.slice(1,3).map((src,i)=><Reveal key={src} scale><img src={src} alt={`${page.title[locale]} ${i+1}`} loading="lazy"/></Reveal>)}</div>}<section className="dt-wrap dt-section"><Heading locale={locale} title={{zh:'相关设备',en:'Related machines'}}/><EquipmentTable locale={locale} group={slug}/></section><section className="dt-wrap dt-section"><Heading locale={locale} title={{zh:'相关项目',en:'Related projects'}}/><ProjectGrid locale={locale} basePath={basePath} slugs={page.relatedProjects}/></section><CTA locale={locale} basePath={basePath}/></Shell>}
export const Milling=(p:SiteTemplatePageProps)=><Capability {...p} slug="cnc-milling"/>
export const Turning=(p:SiteTemplatePageProps)=><Capability {...p} slug="cnc-turning"/>
export const SheetMetal=(p:SiteTemplatePageProps)=><Capability {...p} slug="sheet-metal"/>
export const Welding=(p:SiteTemplatePageProps)=><Capability {...p} slug="welding-fabrication"/>
export const Assembly=(p:SiteTemplatePageProps)=><Capability {...p} slug="assembly"/>
export const Finishing=(p:SiteTemplatePageProps)=><Capability {...p} slug="finishing"/>
