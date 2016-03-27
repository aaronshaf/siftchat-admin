import {
  LIST_ARTICLES_PENDING,
  LIST_ARTICLES_SUCCESS,
  LIST_ARTICLES_ERROR
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
    case LIST_ARTICLES_PENDING:
      return {
        ...state,
        wasSuccessful: false,
        isLoading: true,
        error: null,
        data: []
      }

    case LIST_ARTICLES_SUCCESS:
      return {
        ...state,
        wasSuccessful: true,
        isLoading: false,
        error: null,
        data: action.response.data
      }

    case LIST_ARTICLES_ERROR:
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
