import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'redux-tower/lib/react'

import store from './store/store'

ReactDOM.render(
	<Provider store={store}>
		<Router />
	</Provider>,
	document.querySelector('#root'),
)
