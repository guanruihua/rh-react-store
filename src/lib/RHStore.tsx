import React from "react"
import { RhContext, iRHStore, register } from "."

export function RHStore({ store = {}, children }: iRHStore): any {
  return <RhContext.Provider value={register(store)}>{children}</RhContext.Provider>
}