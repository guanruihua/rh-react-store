import { tAny } from '../type'

export interface BaseStore {
  name: string
  value: string
  obj: { [key: string]: any }
  update(payload:tAny):tAny;
}

class Store implements BaseStore {
  name: string = 'astore'
  value: string = 'value1'
  obj: { [key: string]: any } = {}
  update(payload: tAny): tAny {
    console.log({ t: this, payload })
    return {
      ...this,
      ...payload
    }
  }
}

export default new Store()
