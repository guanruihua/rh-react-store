import React from 'react'
import { RhContext } from '.'
import { InjectStoreProps, tAny } from './type'

export function InjectStore(props: InjectStoreProps): any {
	const { namespace = '' }: InjectStoreProps = props
	let itemStore: tAny = {}
	const { state, dispatch } = React.useContext(RhContext)
	dispatch.permissions = {}
	namespace
		.split(',')
		.filter(Boolean)
		.forEach((item: any): void => {
			if (state[item]) {
				itemStore[item] = state[item]
				dispatch.permissions[item] = item
			}
		})

	return (
		<React.Fragment>
			{[].concat(props.children).map((item: any, index: number): any => {
				if (item.type)
					return <item.type key={index.toString() + 'key'} store={itemStore} dispatch={dispatch} {...item.props} />
				return item
			})}
		</React.Fragment>
	)
}