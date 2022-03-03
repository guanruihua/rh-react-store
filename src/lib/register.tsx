import React, { Context } from 'react'
import { tAny } from './type'

export function register(initialRhState: tAny): tAny {
  function reducerByNamespace(state: { [key: string]: any }, action: tAny): { [key: string]: any } {
    const { type = '', payload = {}, ...rest }: tAny = action
    const [namespace, act] = type.split('/')

    if (state[namespace] && initialRhState[namespace] && initialRhState[namespace][act]) {
      return {
        ...state,
        [namespace]: initialRhState[namespace][act].call(initialRhState[namespace], payload),
      }
    }
    return state
  }
  const [state, dispatch] = React.useReducer(reducerByNamespace, initialRhState)

  return { state, dispatch }
}