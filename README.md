# 说明

> 使用提前准备好的 数据模板, 减少重复书写重复代码
> 每一个template 是 分开处理的
> eg: src/index.tsx

## 使用说明

### store 状态

```tsx
class Store implements BaseStore {
  name: string = 'store'
  value: string = 'value'
  obj: { [key: string]: any } = {}
  update(payload: tAny): any {

   // 返回修改后的值
    return {
      ...this,
      ...payload
    }
  }
}

export default new Store()
```

### 状态注册

```tsx
import React from 'react'
import { InjectStore, RHStore } from 'rh-react-hook-state'
import ModuleA from './moduleA'
import ModuleB from './moduleB'
import ModuleC from './moduleC'
import ModuleD from './moduleD'
import storeA from './moduleA/store'
import storeB from './moduleB/store'

export const initialRhState: tAny = {
  a: storeA,
  b: storeB,
}

function App() {
  return (
    <RHStore store={initialRhState}>
      <InjectStore namespace="a,b">
        <ModuleA />
      </InjectStore>
      <InjectStore namespace="a,b">
        <ModuleB />
      </InjectStore>
      <ModuleC/>
      <ModuleD/>
    </RHStore>
  )
}

```

### 状态使用

#### 内联式

> `function` 和 `class` 都可以, `store`和 `dispatch` 都会挂载到props上

```tsx
// 注册了a, b 两个store
<InjectStore namespace="a,b">
  <ModuleA />
</InjectStore>
```

#### 函数 使用 `( inject + function )`

```tsx
// 注册了a, b 两个store
export default inject('b', 'a')(function (props: Prop) {
 const { dispatch }: Prop = props
 const { name, obj, value, update }: BaseStore = props.store.b || {}
 return (
  <div>
   <div className="tile"> moduleB</div>
   <div>{`name: ${name}`}</div>
   <div>{`value: ${value}`}</div>
   <div>{`${JSON.stringify(obj)}`}</div>
   <div className="">
    <button onClick={() => dispatch({ type: 'b/update', payload: { name: 'newName' } })}>update B name</button>
    <button onClick={() => dispatch({ type: 'a/update', payload: { name: 'newName' } })}>update A name</button>
   </div>
  </div>
 )
})
```

#### Class使用 `( inject + class )`

```tsx
// 注册了a, b 两个store
@inject('b', 'a')
class ModuleD extends React.Component<Prop> {
 render() {
  const { dispatch }: Prop = this.props
  const { name, obj, value, update }: BaseStore = this.props.store.b || BaseStoreDefault
  return (
   <div>
    <div className="tile"> moduleB</div>
    <div>{`name: ${name}`}</div>
    <div>{`value: ${value}`}</div>
    <div>{`${JSON.stringify(obj)}`}</div>
    <div className="">
     <button onClick={() => dispatch({ type: 'b/update', payload: { name: 'newName' } })}>update B name</button>
     <button onClick={() => dispatch({ type: 'a/update', payload: { name: 'newName' } })}>update A name</button>
    </div>
   </div>
  )
 }
}

```
