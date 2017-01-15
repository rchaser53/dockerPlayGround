import * as React from 'react'
import {
	fork,
	call
} from 'redux-saga/effects'
import { delay } from 'redux-saga'
import {
	saga,
	createHashHistory
} from 'redux-tower'

import App from '../component/App'
import Index from '../component/Index'
import Tower from '../component/Tower'

function* rootSaga() {
	yield fork(saga, {history, routes})
}

const routes = {
 	 *'/poyo'() {
		 yield Index
	 },
	 *'/tower'() {
		 if (Math.random() * 2 > 1) {
       		 yield Index
		 } else {
       		 yield Tower
		 }
     },
	 '*': App,
}

const history = createHashHistory()
export default rootSaga
