import Link from 'next/link'
import type { SiteTemplatePageProps } from '../../../types'
import { capabilities,getPage } from '../content/catalog'
import { Shell } from '../components/Shell'
import { Article } from '../components/Article'
import { PageHeader,Heading,CTA } from '../components/Common'
import { ProjectGrid } from '../components/Cards'
import { Reveal } from '../components/Motion'
function Industry({slug,locale='zh',basePath}:SiteTemplatePageProps&{slug:string}){const page=getPage('industries/'+slug);return <Shell locale={locale} basePath={basePath}><PageHeader page={page} locale={locale} basePath={basePath}/><Reveal scale className="dt-wrap"><img className="dt-page-photo" src={page.images[0]} alt={page.title[locale]}/></Reveal><section className="dt-wrap dt-section dt-split"><Article page={page} locale={locale}/>{page.images[1]&&<Reveal scale><img className="dt-wide-photo" src={page.images[1]} alt={page.title[locale]} loading="lazy"/></Reveal>}</section><section className="dt-wrap dt-section"><Heading locale={locale} title={{zh:'为这个行业做过的零件',en:'Related projects'}}/><ProjectGrid locale={locale} basePath={basePath} slugs={page.relatedProjects}/></section><section className="dt-wrap dt-section"><Heading locale={locale} title={{zh:'使用的制造能力',en:'Capabilities used'}}/><div className="dt-three-grid">{capabilities.map(c=><Link key={c.slug} href={`${basePath}/${c.slug}`} className="dt-glass dt-mini-cap"><img src={c.images[0]} alt={c.title[locale]} loading="lazy"/><h3>{c.title[locale]}</h3></Link>)}</div></section><CTA locale={locale} basePath={basePath}/></Shell>}
export const Aerospace=(p:SiteTemplatePageProps)=><Industry {...p} slug="aerospace"/>
export const Medical=(p:SiteTemplatePageProps)=><Industry {...p} slug="medical"/>
export const Energy=(p:SiteTemplatePageProps)=><Industry {...p} slug="energy"/>
export const Robotics=(p:SiteTemplatePageProps)=><Industry {...p} slug="robotics"/>
export const Semiconductor=(p:SiteTemplatePageProps)=><Industry {...p} slug="semiconductor"/>
export const Industrial=(p:SiteTemplatePageProps)=><Industry {...p} slug="industrial-equipment"/>
