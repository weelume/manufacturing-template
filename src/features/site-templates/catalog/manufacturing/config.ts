export type Copy = { zh: string; en: string }
export type Locale = 'zh' | 'en'
export interface ContentBlock { kind: string; text: Copy }
export interface Spec { label: Copy; value: Copy }
export interface ContentPage { slug: string; title: Copy; description: Copy; body: ContentBlock[]; specs: Spec[]; images: string[]; relatedProjects: string[] }
export const copy=(zh:string,en:string):Copy=>({zh,en})
export const brand={name:copy('Datum','Datum'),year:'2026',email:'quotes@datumprecision.com',jobsEmail:'jobs@datumprecision.com',phone:'(815) 555-0187',phoneHref:'tel:+18155550187',address:'2210 Harrison Avenue, Rockford, IL 61104',coordinates:'42.2553° N, 89.0734° W'}
export const nav=[{slug:'capabilities',label:copy('制造能力','Capabilities')},{slug:'industries',label:copy('服务行业','Industries')},{slug:'equipment',label:copy('设备清单','Equipment')},{slug:'quality',label:copy('质量体系','Quality')},{slug:'projects',label:copy('项目案例','Projects')},{slug:'about',label:copy('关于我们','About')},{slug:'careers',label:copy('加入团队','Careers')}]
export const photo=(file:string)=>'/templates/manufacturing/photos/'+file+'.jpg'
