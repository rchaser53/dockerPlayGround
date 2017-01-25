import * as React from 'react'
import Tower from './Tower'
import {App} from './App'
import {connect} from 'react-redux'

import * as testUtil from 'react-addons-test-utils'

export interface Props {
	poyo?: number
	dispatch?: any
}
export class Index extends React.Component<Props, {}> {
	constructor() {
		super()
		console.log('constructor', this)
	}
	render() {
		return 	<div>{this.props.poyo || 1111}
			<li><a href={`/poyo?${Date.now()}`}>makimakimaki-</a></li>
			<li><a href='/'>-</a></li>
					<li><a onClick={() => {
						this.props.dispatch({
							type: '@@redux-tower/CHANGE_COMPONENT',
							payload: <App poyo={21} dispatch={this.props.dispatch} />
						})	
						}}>test2</a></li>
				</div>

	}
}
export default connect(({}) =>{ return {}})(Index)
