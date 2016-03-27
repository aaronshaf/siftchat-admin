import {
  GET_ARTICLE_PENDING,
  GET_ARTICLE_SUCCESS,
  GET_ARTICLE_ERROR
} from '../constants/action-types'

const initialState = {
  data: {},
  wasSuccessful: true,
  isLoading: false,
  error: null
}

export default function article (state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLE_PENDING:
      return {
        ...state,
        wasSuccessful: false,
        isLoading: true,
        error: null,
        data: []
      }

    case GET_ARTICLE_SUCCESS:
      return {
        ...state,
        wasSuccessful: true,
        isLoading: false,
        error: null,
        data: action.response.data && action.response.data[0]
      }

    case GET_ARTICLE_ERROR:
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
