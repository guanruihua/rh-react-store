import { tAny } from '../type'

export interface BaseStore {
  name: string
  value: string
  obj: { [key: string]: any }
  update(payload: tAny): tAny
}

export const BaseStoreDefault: BaseStore = {
  name: '',
  value: '',
  obj: {},
  update: (payload: tAny): tAny => {
    return
  },
}

class Store implements BaseStore {
  name: string = 'bstore'
  value: string = 'value2'
  obj: { [key: string]: any } = {}
  update(payload: tAny): tAny {
    console.log({ t: this, payload })
    return {
      ...this,
      ...payload,
    }
  }
}

export default new Store()
