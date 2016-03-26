import React from 'react'
import Head from 'react-helmet'
import FrontPage from '../components/front-page'
import App from '../components/common/app'
import { listSites } from '../actions/sites'
import { getState, subscribe } from '../store'

function view () {
  return (
    <App
      {...getState()}
      title='SiftChat'
    >
      <Head title='SiftChat' />
      <FrontPage {...getState()} />
    </App>
  )
}

export default ({ params, resolve, render, exiting }) => {
  listSites()
  resolve(view())
  const unsubscribe = subscribe(() => render(view()))
  exiting.then(unsubscribe)
}
