import {
  LIST_ARTICLES_PENDING,
  LIST_ARTICLES_SUCCESS,
  LIST_ARTICLES_ERROR
} from '../constants/action-types'
import { dispatch } from '../store'

export function listArticles (siteId) {
  dispatch({
    type: LIST_ARTICLES_PENDING
  })

  fetch(`${process.env.API_HOST}/articles?siteId=${siteId}`).then(async function (response) {
    if (response.ok) {
      const json = await response.json()
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
