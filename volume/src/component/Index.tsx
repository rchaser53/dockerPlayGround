import * as React from 'react'
import Tower from './Tower'

import * as testUtil from 'react-addons-test-utils'

export interface Props {
	poyo: number
}
export class Index extends React.Component<Props, {}> {
	render() {
		//	return <div>{this.props.poyo}</div>
		const abc = <Tower test={23} />
		console.log(testUtil.isElement(abc),testUtil.isElement(Tower))
		return abc
	}
}
export default Index
