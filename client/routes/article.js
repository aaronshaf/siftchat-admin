import React from 'react'
import Head from 'react-helmet'
import App from '../components/common/app'
import Article from '../components/article'
import { getSite } from '../actions/site'
import { getArticleById } from '../actions/article'
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
  getSite(params.siteId)
  getArticleById(params.articleId)
  resolve(view())
  const unsubscribe = subscribe(() => render(view()))
  exiting.then(unsubscribe)
}
