import React from 'react'
import Head from 'react-helmet'
import App from '../../components/common/app'
import EditArticle from '../../components/articles/edit'
import { getSiteByPath } from '../../actions/site'
import { getArticleByPath } from '../../actions/article'
import { getState, subscribe } from '../../store'

function view () {
  const title = getState().article.data.title || ''
  return (
    <App
      {...getState()}
      title={title}
    >
      <Head title={title} />
      {
        getState().article.wasSuccessful &&
        <EditArticle {...getState()} />
      }
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
