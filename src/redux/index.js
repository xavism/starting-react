import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import thunk from 'redux-thunk';

// los reducers
import coins from './coins';
const reducers = combineReducers({
  coins
})

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, thunk)),
)