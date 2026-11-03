import { getNewsMeta,formatDate } from '../content/news'
import type { SiteTemplatePageProps } from '../../../types'
import { getPage } from '../content/catalog'
import { Shell } from '../components/Shell'
import { PageHeader,CTA } from '../components/Common'
import { Article } from '../components/Article'
import { Reveal } from '../components/Motion'
function NewsArticle({slug,locale='zh',basePath}:SiteTemplatePageProps&{slug:string}){const page=getPage('news/'+slug),meta=getNewsMeta(page.slug);return <Shell locale={locale} basePath={basePath}><PageHeader page={page} locale={locale} basePath={basePath}/><div className="dt-wrap dt-article-meta"><time dateTime={meta.date}>{formatDate(meta.date,locale)}</time><span>{meta.category[locale]}</span><span>{meta.minutes}{locale==='zh'?' 分钟阅读':' min read'}</span><span>{locale==='zh'?'作者：':'Written by '}{meta.author}</span></div><Reveal className="dt-wrap" scale><img className="dt-page-photo" src={page.images[0]} alt={page.title[locale]}/></Reveal><section className="dt-wrap dt-section dt-article-wrap"><Article page={page} locale={locale}/></section><CTA locale={locale} basePath={basePath}/></Shell>}
export const Machines=(p:SiteTemplatePageProps)=><NewsArticle {...p} slug="new-5-axis-machines"/>
export const Quoting=(p:SiteTemplatePageProps)=><NewsArticle {...p} slug="how-we-quote-in-48-hours"/>
export const Audit=(p:SiteTemplatePageProps)=><NewsArticle {...p} slug="as9100d-audit"/>
export const Apprentices=(p:SiteTemplatePageProps)=><NewsArticle {...p} slug="apprenticeship-class-2026"/>
export const Design=(p:SiteTemplatePageProps)=><NewsArticle {...p} slug="design-for-machining"/>
export const Shift=(p:SiteTemplatePageProps)=><NewsArticle {...p} slug="why-we-run-a-second-shift"/>
