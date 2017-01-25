import * as React from 'react'
import {
	fork,
	take,
	call
} from 'redux-saga/effects'
import {
	saga,
	createBrowserHistory
} from 'redux-tower'

import App from '../component/App'
import Index from '../component/Index'
import Tower from '../component/Tower'

function* rootSaga() {
	const history = createBrowserHistory()
	yield fork(saga, {history, routes})
}

const routes = {
 	 *'/poyo'() {
		 yield <Index />
	 },
	 *'/tower'() {
		 if (Math.random() * 2 > 1) {
		 	yield <Index />
		 } else {
			yield <Tower test={2345}/>
		 }
     },
	 *'*'() {
		 yield <App />
	 }
}

export default rootSaga
