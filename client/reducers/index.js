import { combineReducers } from 'redux'
import article from './article'
import articles from './articles'
import session from './session'
import sites from './sites'
import site from './site'

const rootReducer = combineReducers({
  articles,
  article,
  session,
  sites,
  site
})

export default rootReducer
