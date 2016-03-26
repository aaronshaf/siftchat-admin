import { createStore } from 'redux'
import reducers from './reducers/index'

const store = createStore(reducers)
export const dispatch = store.dispatch
export const subscribe = store.subscribe
export const getState = store.getState
