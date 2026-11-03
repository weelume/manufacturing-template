import { copy,type Locale } from '../config'
export const newsMeta=[
 {slug:'news/new-5-axis-machines',date:'2026-09-10',author:'Karen Brenner',category:copy('车间新闻','Shop news'),minutes:3},
 {slug:'news/how-we-quote-in-48-hours',date:'2026-08-21',author:'Dan Okafor',category:copy('工程','Engineering'),minutes:5},
 {slug:'news/as9100d-audit',date:'2026-07-30',author:'Maria Lindqvist',category:copy('质量','Quality'),minutes:2},
 {slug:'news/apprenticeship-class-2026',date:'2026-06-18',author:'Karen Brenner',category:copy('招聘','Careers'),minutes:4},
 {slug:'news/design-for-machining',date:'2026-05-27',author:'Dan Okafor',category:copy('工程','Engineering'),minutes:6},
 {slug:'news/why-we-run-a-second-shift',date:'2026-04-15',author:'Karen Brenner',category:copy('车间新闻','Shop news'),minutes:3},
]
export function getNewsMeta(slug:string){const item=newsMeta.find(item=>item.slug===slug);if(!item)throw new Error('缺少文章元数据：'+slug);return item}
export const formatDate=(date:string,locale:Locale)=>new Intl.DateTimeFormat(locale==='zh'?'zh-CN':'en-US',{year:'numeric',month:'short',day:'numeric',timeZone:'UTC'}).format(new Date(date+'T12:00:00Z'))
