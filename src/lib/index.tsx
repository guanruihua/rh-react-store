import React, { Context } from 'react'
export * from './inject'
export * from './injectStore'
export * from './type'
export * from './register'
export * from './RHStore'

export const RhContext: Context<any> = React.createContext({})

