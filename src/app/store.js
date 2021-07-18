import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import allReducers from '../reducers/index'


const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

export const store = createStore(
  allReducers,
  composedEnhancer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)