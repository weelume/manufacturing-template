import type { SiteTemplatePageProps } from '../../../types'
import { getPage } from '../content/catalog'
import { Shell } from '../components/Shell'
import { PageHeader } from '../components/Common'
import { Article } from '../components/Article'
function Legal({slug,locale='zh',basePath}:SiteTemplatePageProps&{slug:string}){const page=getPage(slug);return <Shell locale={locale} basePath={basePath}><PageHeader page={page} locale={locale} basePath={basePath}/><section className="dt-wrap dt-section dt-article-wrap"><Article page={page} locale={locale}/></section></Shell>}
export const Privacy=(p:SiteTemplatePageProps)=><Legal {...p} slug="privacy"/>
export const Terms=(p:SiteTemplatePageProps)=><Legal {...p} slug="terms"/>
