import * as React from 'react'
import { Link } from 'redux-tower/lib/react'
export interface Props {
}
export default class App extends React.Component<Props, {}> {
	constructor() {
		super()
		console.log('constructor', this)
	}
	render() {
		return 	<ul>
					<li><a href='/poyo'>test</a></li>
					<li><a href='/tower'>tower</a></li>
				</ul>
	}
}
