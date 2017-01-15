import {
   	Store,
	combineReducers,
	createStore,
	applyMiddleware
} from 'redux'
import {
	saga as rootSaga,
	reducer as routerReducer
} from 'redux-tower'

import createSagaMiddleware from 'redux-saga'
import saga from '../saga/rootSaga'
const sagaMiddleware = createSagaMiddleware()

const reducer = (state = {}, action) => {
	switch (action.type) {
		case 'TEST':
		default:
		return state
	}
}

const combinedReducer = combineReducers({
	router: routerReducer
})

const store = createStore(
	combinedReducer,
	applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(saga)

export default store
