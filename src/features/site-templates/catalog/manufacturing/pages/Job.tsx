import type { SiteTemplatePageProps } from '../../../types'
import { getPage } from '../content/catalog'
import { Shell } from '../components/Shell'
import { PageHeader } from '../components/Common'
import { Article } from '../components/Article'
import { LocalForm } from '../components/Forms'
function Job({slug,locale='zh',basePath}:SiteTemplatePageProps&{slug:string}){const page=getPage('careers/'+slug);return <Shell locale={locale} basePath={basePath}><PageHeader page={page} locale={locale} basePath={basePath}/><section className="dt-wrap dt-section dt-detail-row dt-align-start"><Article page={page} locale={locale}/><LocalForm mode="apply" locale={locale} jobTitle={page.title[locale]}/></section></Shell>}
export const Machinist=(p:SiteTemplatePageProps)=><Job {...p} slug="cnc-machinist-second-shift"/>
export const Swiss=(p:SiteTemplatePageProps)=><Job {...p} slug="swiss-lathe-operator"/>
export const Inspector=(p:SiteTemplatePageProps)=><Job {...p} slug="quality-inspector"/>
export const Apprentice=(p:SiteTemplatePageProps)=><Job {...p} slug="machinist-apprentice"/>
