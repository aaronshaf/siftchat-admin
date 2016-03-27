import {
  GET_SITE_PENDING,
  GET_SITE_SUCCESS,
  GET_SITE_ERROR
} from '../constants/action-types'

const initialState = {
  data: {},
  wasSuccessful: true,
  isLoading: false,
  error: null
}

export default function article (state = initialState, action) {
  switch (action.type) {
    case GET_SITE_PENDING:
      return {
        ...state,
        data: {},
        wasSuccessful: false,
        isLoading: true,
        error: null
      }

    case GET_SITE_SUCCESS:
      return {
        ...state,
        data: action.response.data && action.response.data[0],
        wasSuccessful: true,
        isLoading: false,
        error: null
      }

    case GET_SITE_ERROR:
      return {
        ...state,
        data: {},
        wasSuccessful: false,
        isLoading: false,
        error: action.error
      }
    default:
      return state
  }
}
