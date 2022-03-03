import React from 'react'
import { RhContext } from '.'
import { tAny } from './type'

export function injected(...storeNames: string[]): any {
	return function (TclassComponent: any): any {
		return function () {

			const selectStores: any = React.useContext(RhContext)
			const _props: { [key: string]: any } = {}

			storeNames.forEach((tmpName: string): void => {
				_props[tmpName] = {};
				let obj: any = selectStores[tmpName]
				for (let key in obj) {
					if (obj[key] instanceof Function) {
						_props[tmpName][key] = obj[key]
					} else {
						const [val, setVal] = React.useState(obj[key])
						Object.defineProperty(_props[tmpName], key, {
							enumerable: true,
							configurable: true,
							set: function (newVal: any) {
								setVal(newVal)
							},
							get: function () {
								return val
							}
						})
					}
				}
			})

			return <TclassComponent {..._props} />
		}
	}
}

export function inject(...storeNames: string[]): any {
	return function (TclassComponent: any): any {
		return function () {

			const { state, dispatch } = React.useContext(RhContext)
			let itemStore: tAny = {}
			const _props: { [key: string]: any } = {}

			storeNames
				.filter(Boolean)
				.forEach((item: string): void => {
					if (state[item]) {
						itemStore[item] = state[item]
						dispatch.permissions[item] = item
					}
				})

			return <TclassComponent {..._props} dispatch={dispatch} store={itemStore} />
		}
	}
}
