import {
  LIST_SITES_PENDING,
  LIST_SITES_SUCCESS,
  LIST_SITES_ERROR
} from '../constants/action-types'

const initialState = {
  data: [],
  meta: {},
  wasSuccessful: true,
  isLoading: false,
  error: null
}

export default function article (state = initialState, action) {
  switch (action.type) {
    case LIST_SITES_PENDING:
      return {
        ...state,
        wasSuccessful: false,
        isLoading: true,
        error: null
      }
    case LIST_SITES_SUCCESS:
      return {
        ...state,
        wasSuccessful: true,
        isLoading: false,
        error: null,
        data: action.response.data
      }
    case LIST_SITES_ERROR:
      return {
        ...state,
        wasSuccessful: false,
        isLoading: false,
        error: action.error
      }
    default:
      return state
    }
}
