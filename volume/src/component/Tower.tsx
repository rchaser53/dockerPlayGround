import * as React from 'react'

export interface Props {
	test: number
}
export class Index extends React.Component<Props, {}> {
	render() {
		return <div>{this.props.test}</div>
	}
}
export default Index
