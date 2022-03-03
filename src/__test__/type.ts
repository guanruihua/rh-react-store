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
