import React, { createContext, useContext } from 'react'

export type AppConfig = {
  basic: {
    app_name: string
    strapi_url: string
    strapi_site_slug: string
    gtmId?: string
    seo: {
      title: string
      description: string
      keywords: string
    }
    hero: {
      slogan: string
      description: string
    }
  }
  extra?: Record<string, any>
}

const ConfigContext = createContext<AppConfig | null>(null)

export const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
  const config = (window as any).APP_CONFIG as AppConfig
  return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
}

export const useConfig = () => {
  const ctx = useContext(ConfigContext)
  if (!ctx) throw new Error('useConfig must be used within ConfigProvider')
  return ctx
}