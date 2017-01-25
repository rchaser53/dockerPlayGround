import * as React from 'react'
import {connect} from 'react-redux'
import { Link } from 'redux-tower/lib/react'
export interface Props {
	dispatch: any
	poyo?: number
}
export class App extends React.Component<Props, {}> {
	constructor() {
		super()
		console.log('constructor', this)
	}
	render() {
		console.log('render!', this.props)
		return 	<ul>
					<li><a onClick={() => {
						this.props.dispatch({
							type: '@@redux-tower/CHANGE_COMPONENT',
							payload: <App dispatch={this.props.dispatch} />
						})	
						}}>test</a></li>
					<li><a onClick={() => {
						this.props.dispatch({
							type: '@@redux-tower/CHANGE_COMPONENT',
							payload: <App poyo={11} dispatch={this.props.dispatch} />
						})	
						}}>test2</a></li>
					<li><a href='/tower'>tower</a></li>
					<li><a>{this.props.poyo || 'nya-n'}</a></li>
				</ul>
	}
}
export default connect(({}) =>{ return {}})(App)
//<li><a href='/poyo'>test</a></li>
//payload: <App dispatch={this.props.dispatch} />
// payload: connect(({}) =>{ return {}})(App)
