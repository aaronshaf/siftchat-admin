import {
  FIND_ARTICLE,
  FIND_ARTICLE_SUCCESS
} from '../constants/action-types'
import { dispatch } from '../store'

export function findArticleByAlias (alias = 'main-page') {
  dispatch({
    type: FIND_ARTICLE,
    alias
  })
  
  fetch(`${process.env.API_HOST}/articles-by-alias/${alias}`).then(async function (response) {
    if (response.ok) {
      const json = await response.json()
      dispatch({
        type: FIND_ARTICLE_SUCCESS,
        response: json
      })
    } else {
      // destroySession(sessionId)
    }
  }).catch(function (err) {
    console.log('parsing failed', err)
  })
}
