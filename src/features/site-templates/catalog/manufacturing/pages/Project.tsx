import type { SiteTemplatePageProps } from '../../../types'
import { getPage } from '../content/catalog'
import { Shell } from '../components/Shell'
import { PageHeader,CTA } from '../components/Common'
import { Article } from '../components/Article'
import { Testimonials } from '../components/Cards'
import { Reveal } from '../components/Motion'
function Project({slug,locale='zh',basePath}:SiteTemplatePageProps&{slug:string}){const page=getPage('projects/'+slug);return <Shell locale={locale} basePath={basePath}><PageHeader page={page} locale={locale} basePath={basePath}/><dl className="dt-wrap dt-project-specs">{page.specs.map(s=><div key={s.label.en}><dt>{s.label[locale]}</dt><dd>{s.value[locale]}</dd></div>)}</dl><Reveal className="dt-wrap" scale><img className="dt-page-photo dt-project-detail-photo" src={page.images[0]} alt={page.title[locale]}/></Reveal><section className="dt-wrap dt-section dt-detail-row"><Article page={page} locale={locale}/>{page.images[1]&&<Reveal scale><img className="dt-project-side-photo" src={page.images[1]} alt={page.title[locale]} loading="lazy"/></Reveal>}</section><Testimonials locale={locale}/><CTA locale={locale} basePath={basePath}/></Shell>}
export const Wing=(p:SiteTemplatePageProps)=><Project {...p} slug="wing-rib-brackets"/>
export const Surgical=(p:SiteTemplatePageProps)=><Project {...p} slug="surgical-robot-housings"/>
export const Hydrogen=(p:SiteTemplatePageProps)=><Project {...p} slug="hydrogen-valve-bodies"/>
export const Robot=(p:SiteTemplatePageProps)=><Project {...p} slug="robot-joint-housings"/>
export const Chamber=(p:SiteTemplatePageProps)=><Project {...p} slug="chamber-lids"/>
export const Manifold=(p:SiteTemplatePageProps)=><Project {...p} slug="hydraulic-manifolds"/>
