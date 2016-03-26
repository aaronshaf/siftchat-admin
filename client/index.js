import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import { getState, subscribe } from './store'
import Router from 'middle-router'

import {
  ensureLogin,
  login,
  logout
} from './actions/session'

//routes
import frontPageRoute from './routes/front-page'
import siteRoute from './routes/site'
import articlesRoute from './routes/articles'

let router = Router()
  .get('/', ensureLogin, frontPageRoute)
  .get('/sites/:siteId', ensureLogin, siteRoute)
  .get('/sites/:siteId/articles', ensureLogin, articlesRoute)
  .get('/login', login)
  .get('/logout', logout)

const APP = document.getElementById('app')

function render (view) {
  ReactDOM.render(view, APP)
}

router
  .on('route', async function (args, routing) {
    args.render = render
    try {
      let view = await routing
      render(view)
    } catch (error) {
      console.error(error)
    }
  })
  .start({ routeLinks: true })
