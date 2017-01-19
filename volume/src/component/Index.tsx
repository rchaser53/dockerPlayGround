import * as React from 'react'

export interface Props {
	poyo: number
}
export class Index extends React.Component<Props, {}> {
	render() {
		console.log(this.props, 2)
		return <div>{this.props.poyo}</div>
	}
}
export default Index
