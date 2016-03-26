import React from 'react'
import Head from 'react-helmet'
import Articles from '../components/articles'
import { listArticles } from '../actions/articles'
import { getState, subscribe } from '../store'

function view () {
  return (
    <div>
      <Head title='Articles' />
      <Articles {...getState()} />
    </div>
  )
}

export default ({ params, resolve, render, exiting }) => {
  listArticles(params.siteId)
  resolve(view())
  const unsubscribe = subscribe(() => render(view()))
  exiting.then(unsubscribe)
}
