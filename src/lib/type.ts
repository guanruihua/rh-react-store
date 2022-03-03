export type tAny = { [key: string]: any }
export interface iPayload {
  user?: any
  token?: any
  [key: string]: any
}
export interface iAction {
  type: string
  payload: iPayload
  [key: string]: any
}

export interface iRHStore {
  store: tAny
  children: React.ReactNode
}

export interface InjectStoreProps {
  namespace?: string
  children?: React.ReactNode
}