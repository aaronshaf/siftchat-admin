import {
  // GET_SITE_PENDING
  GET_SITE_SUCCESS
} from '../constants/action-types'

const initialState = {
  data: {}
}

export default function article (state = initialState, action) {
  switch (action.type) {
    case GET_SITE_SUCCESS:
      const newState = {
        ...state,
        data: action.response.data
      }
      return newState
    default:
      return state
  }
}
