import React from 'react'
import Head from 'react-helmet'
import App from '../components/common/app'
import Article from '../components/article'
import { getSiteByPath } from '../actions/site'
import { getArticleByPath } from '../actions/article'
import { getState, subscribe } from '../store'

function view () {
  const title = getState().article.data.title || ''
  return (
    <App
      {...getState()}
      title={title}
    >
      <Head title={title} />
      <Article {...getState()} />
    </App>
  )
}

export default ({ params, resolve, render, exiting }) => {
  getSiteByPath(params.sitePath)
  getArticleByPath(params.sitePath, params.articlePath)
  resolve(view())
  const unsubscribe = subscribe(() => render(view()))
  exiting.then(unsubscribe)
}
