import {
  LIST_SITES_PENDING,
  LIST_SITES_SUCCESS,
  LIST_SITES_ERROR
} from '../constants/action-types'
import { getState, dispatch } from '../store'

export function listSites () {
  dispatch({
    type: LIST_SITES_PENDING
  })

  fetch(`${process.env.API_HOST}/sites`, {
    mode: 'cors',
    headers: {
      'Authorization': 'Bearer ' + getState().session.userToken
    }
  }).then(async (response) => {
    if (response.ok) {
      const json = await response.json()
      dispatch({
        type: LIST_SITES_SUCCESS,
        response: json
      })
    } else {
      dispatch({
        type: LIST_SITES_ERROR,
        response
      })
    }
  }).catch(function (err) {
    console.log('parsing failed', err)
  })
}
