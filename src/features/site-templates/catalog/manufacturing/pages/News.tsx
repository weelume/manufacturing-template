import type { SiteTemplatePageProps } from '../../../types'
import { getPage } from '../content/catalog'
import { Shell } from '../components/Shell'
import { PageHeader,CTA } from '../components/Common'
import { NewsGrid } from '../components/Cards'
export default function News({locale='zh',basePath}:SiteTemplatePageProps){return <Shell locale={locale} basePath={basePath}><PageHeader page={getPage('news')} locale={locale} basePath={basePath}/><section className="dt-wrap dt-section dt-section-first"><NewsGrid locale={locale} basePath={basePath} all/></section><CTA locale={locale} basePath={basePath}/></Shell>}
