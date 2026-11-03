import type { SiteTemplatePageProps } from '../../../types'
import { getPage } from '../content/catalog'
import { Shell } from '../components/Shell'
import { PageHeader,CTA } from '../components/Common'
import { IndustryGrid } from '../components/Cards'
export default function Industries({locale='zh',basePath}:SiteTemplatePageProps){return <Shell locale={locale} basePath={basePath}><PageHeader page={getPage('industries')} locale={locale} basePath={basePath}/><section className="dt-wrap dt-section dt-section-first"><IndustryGrid locale={locale} basePath={basePath}/></section><CTA locale={locale} basePath={basePath}/></Shell>}
