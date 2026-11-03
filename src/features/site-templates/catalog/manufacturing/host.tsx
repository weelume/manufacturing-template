'use client'
import { createContext,useContext,type ReactNode } from 'react'
import { brand,type Copy } from './config'
export interface ManufacturingHostOptions {brandName?:Copy;logo?:string;lightLogo?:string;marketplaceHref?:string;marketplaceLabel?:Copy;marketplaceAriaLabel?:Copy;filing?:ReactNode}
const Host=createContext<ManufacturingHostOptions>({})
/** 通过身份注入边界复用完整模板，业务模块不引用消费方工程。 */
export function ManufacturingHostProvider({children,...options}:ManufacturingHostOptions&{children:ReactNode}){return <Host.Provider value={options}>{children}</Host.Provider>}
export function useManufacturingHost(){return useContext(Host)}
export function useManufacturingBrand(){return useContext(Host).brandName??brand.name}
