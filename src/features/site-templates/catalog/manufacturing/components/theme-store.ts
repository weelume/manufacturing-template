'use client'
import { useSyncExternalStore } from 'react'
type Theme='dark'|'light'
let current:Theme='dark'
const listeners=new Set<()=>void>()
const subscribe=(listener:()=>void)=>{listeners.add(listener);return()=>{listeners.delete(listener)}}
/** 主题在客户端路由切换间保留；不保存表单或用户业务信息。 */
export function useManufacturingTheme(){const theme=useSyncExternalStore(subscribe,()=>current,()=>'dark' as Theme);return [theme,()=>{current=current==='dark'?'light':'dark';listeners.forEach(listener=>listener())}] as const}
