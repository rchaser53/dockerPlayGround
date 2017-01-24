import * as React from 'react'
import Tower from './Tower'

import * as testUtil from 'react-addons-test-utils'

export interface Props {
	poyo?: number
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
				</div>

	}
}
export default Index
