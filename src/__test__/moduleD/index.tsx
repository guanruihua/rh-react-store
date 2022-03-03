import React from 'react'
import { BaseStore, BaseStoreDefault } from './store'
import { inject } from '../../lib'

interface Prop {
	dispatch?: (action: { [key: string]: any }) => void
	store?: {
		b: BaseStore
	}
}
@inject('b', 'a')

export default class ModuleD extends React.Component<Prop> {
	render() {
		// console.log(props)
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
