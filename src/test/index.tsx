import React from 'react'
// import storeB from './storeB'
// import storeA from './storeA'
import { tAny } from './type'
import { InjectStore, RHStore } from '../lib'
import ModuleA from './moduleA'
import storeA from './moduleA/store'
import ModuleB from './moduleB'
import storeB from './moduleB/store'
import ModuleC from './moduleC'
import ModuleD from './moduleD'

export const initialRhState: tAny = {
  a: storeA,
  b: storeB,
}

function App() {
  return (
    <RHStore store={initialRhState}>
      <hr/>
      <InjectStore namespace="a,b">
        <ModuleA />
      </InjectStore>
      <hr/>
      <InjectStore namespace="a,b">
        <ModuleB />
      </InjectStore>
      <hr/>
      <ModuleC></ModuleC>
      <hr></hr>
      <ModuleD/>
    </RHStore>
  )
}

export default App
