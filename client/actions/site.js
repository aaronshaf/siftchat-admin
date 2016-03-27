import {
  GET_SITE_PENDING,
  GET_SITE_SUCCESS,
  GET_SITE_ERROR
} from '../constants/action-types'
import { getState, dispatch } from '../store'

export function getSite (id) {
  dispatch({
    type: GET_SITE_PENDING
  })

  fetch(`${process.env.API_HOST}/sites/${id}`, {
    headers: {
      'Authorization': 'Bearer ' + getState().session.userToken
    }
  }).then(async (response) => {
    if (response.ok) {
      const json = await response.json()
      dispatch({
        type: GET_SITE_SUCCESS,
        response: json
      })
    } else {
      dispatch({
        type: GET_SITE_ERROR,
        response
      })
    }
  }).catch(function (error) {
    console.log(error)
  })
}
