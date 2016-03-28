import {
  LIST_ARTICLES_PENDING,
  LIST_ARTICLES_SUCCESS,
  LIST_ARTICLES_ERROR
} from '../constants/action-types'
import { dispatch } from '../store'

let lastQuery

export function listArticles (sitePath, query = null) {
  lastQuery = query
  dispatch({
    type: LIST_ARTICLES_PENDING
  })

  let url
  if (query) {
    url = `${process.env.API_HOST}/articles?sitePath=${sitePath}&query=${query}`
  } else {
    url = `${process.env.API_HOST}/articles?sitePath=${sitePath}`
  }

  fetch(url).then(async function (response) {
    if (response.ok) {
      const json = await response.json()
      if (lastQuery !== query) {
        return
      }
      dispatch({
        type: LIST_ARTICLES_SUCCESS,
        response: json
      })
    } else {
      throw new Error(response)
    }
  }).catch(function (error) {
    console.log('parsing failed', error)
    dispatch({
      type: LIST_ARTICLES_ERROR,
      error
    })
  })
}
