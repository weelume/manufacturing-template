import type { SiteTemplatePageProps } from '../../../types'
import { getPage } from '../content/catalog'
import { Shell } from '../components/Shell'
import { PageHeader,CTA } from '../components/Common'
import { ProjectGrid } from '../components/Cards'
export default function Projects({locale='zh',basePath}:SiteTemplatePageProps){return <Shell locale={locale} basePath={basePath}><PageHeader page={getPage('projects')} locale={locale} basePath={basePath}/><section className="dt-wrap dt-section dt-section-first"><ProjectGrid locale={locale} basePath={basePath} all/></section><CTA locale={locale} basePath={basePath}/></Shell>}
