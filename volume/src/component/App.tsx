import * as React from 'react'

export interface Props {
}
export default class App extends React.Component<Props, {}> {
	render() {
		console.log(23)
		return 	<ul>
					<li><a href='/poyo'>test</a></li>
					<li><a href='/tower'>tower</a></li>
				</ul>
	}
}
