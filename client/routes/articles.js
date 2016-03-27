import React from 'react'
import Head from 'react-helmet'
import App from '../components/common/app'
import Articles from '../components/articles'
import { getSite } from '../actions/site'
import { listArticles } from '../actions/articles'
import { getState, subscribe } from '../store'

function view () {
  const title = getState().site.data.title || ''
  return (
    <App
      {...getState()}
      title={title}
    >
      <Head title='Articles' />
      <Articles {...getState()} />
    </App>
  )
}

export default ({ params, resolve, render, exiting }) => {
  getSite(params.siteId)
  listArticles(params.siteId)
  resolve(view())
  const unsubscribe = subscribe(() => render(view()))
  exiting.then(unsubscribe)
}
