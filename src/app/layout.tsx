import type { Metadata } from 'next'
import './globals.css'
export const metadata:Metadata={title:'Datum Precision Manufacturing',description:'Machined parts that fit the first time.'}
export default function Layout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body>{children}</body></html>}
