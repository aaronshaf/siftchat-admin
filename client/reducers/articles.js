import {
  // LIST_ARTICLES_PENDING,
  LIST_ARTICLES_SUCCESS
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
    case LIST_ARTICLES_SUCCESS:
      const newState = {
        ...state,
        wasSuccessful: true,
        isLoading: false,
        error: null,
        data: action.response.data
      }
      return newState
    default:
      return state
  }
}
