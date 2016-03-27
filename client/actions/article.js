import {
  GET_ARTICLE_PENDING,
  GET_ARTICLE_SUCCESS,
  GET_ARTICLE_ERROR
} from '../constants/action-types'
import { dispatch } from '../store'

export function getArticleByPath (sitePath, articlePath) {
  dispatch({
    type: GET_ARTICLE_PENDING
  })

  fetch(`${process.env.API_HOST}/articles?sitePath=${sitePath}&articlePath=${articlePath}`).then(async function (response) {
    if (response.ok) {
      const json = await response.json()
      dispatch({
        type: GET_ARTICLE_SUCCESS,
        response: json
      })
    } else {
      throw new Error(response)
    }
  }).catch(function (error) {
    console.log('parsing failed', error)
    dispatch({
      type: GET_ARTICLE_ERROR,
      error
    })
  })
}
