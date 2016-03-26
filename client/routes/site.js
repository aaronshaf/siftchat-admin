import React from 'react'
import Head from 'react-helmet'
import App from '../components/common/app'
import Site from '../components/site'
import { getSite } from '../actions/site'
import { getState, subscribe } from '../store'

function view () {
  const title = getState().site.data.title || ''
  return (
    <App
      {...getState()}
      title={title}
    >
      <Head title={title} />
      <Site {...getState()} />
    </App>
  )
}

export default ({ params, resolve, render, exiting }) => {
  getSite(params.siteId)
  resolve(view())
  const unsubscribe = subscribe(() => render(view()))
  exiting.then(unsubscribe)
}
