import Link from 'next/link'
import type { SiteTemplatePageProps } from '../../../types'
import { getPage,capabilities } from '../content/catalog'
import { Shell } from '../components/Shell'
import { PageHeader,CTA } from '../components/Common'
import { Reveal } from '../components/Motion'
export default function Capabilities({locale='zh',basePath}:SiteTemplatePageProps){const page=getPage('capabilities');return <Shell locale={locale} basePath={basePath}><PageHeader page={page} locale={locale} basePath={basePath}/><Reveal className="dt-wrap" scale><img className="dt-page-photo" src={page.images[0]} alt={locale==='zh'?'制造大厅 1–4 区':'The machining hall, bays 1 to 4'}/></Reveal><section className="dt-wrap dt-section dt-capability-ledger">{capabilities.map((item,i)=><Reveal key={item.slug}><Link href={`${basePath}/${item.slug}`} className="dt-capability-row"><div className="dt-capability-info"><span className="dt-eyebrow">0{i+1}</span><h2>{item.title[locale]}</h2><p>{item.description[locale]}</p><dl>{item.specs.map(s=><div key={s.label.en}><dt>{s.label[locale]}</dt><dd>{s.value[locale]}</dd></div>)}</dl><span className="dt-text-link">{locale==='zh'?'查看制造能力':'View capability'}</span></div><img src={item.images[0]} alt={item.title[locale]} loading="lazy"/></Link></Reveal>)}</section><CTA locale={locale} basePath={basePath}/></Shell>}
