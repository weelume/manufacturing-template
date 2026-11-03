import type { ContentPage,Locale } from '../config'
import { BrandText } from './Shell'
export function Article({page,locale}:{page:ContentPage;locale:Locale}){return <article className="dt-article">{page.body.map((block,i)=>{const text=<BrandText text={block.text[locale]} locale={locale}/>;if(block.kind==='h2')return <h2 key={i}>{text}</h2>;if(block.kind==='h3'||block.kind==='h4')return <h3 key={i}>{text}</h3>;if(block.kind==='li')return <ul className="dt-article-list" key={i}><li>{text}</li></ul>;return <p key={i}>{text}</p>})}</article>}
