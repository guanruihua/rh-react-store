import React from 'react'
import { BaseStore } from './store'

interface Prop {
  dispatch?: (action: { [key: string]: any }) => void
  store?: {
    a: BaseStore,
    b: any
  }
}

export default function (props: Prop) {
  // console.log(props)
  const { dispatch }: Prop = props
  const { name, obj, value }: BaseStore = props.store.a
  return (
    <div>
      <div className="tile"> moduleA</div>
      <div>{`name: ${name}`}</div>
      <div>{`value: ${value}`}</div>
      <div>{`name: ${props.store.b.name}`}</div>
      <div>{`value: ${props.store.b.value}`}</div>
      <div>{`${JSON.stringify(obj)}`}</div>
    </div>
  )
}
