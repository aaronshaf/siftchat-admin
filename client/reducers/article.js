import {
  FIND_ARTICLE_SUCCESS
} from '../constants/action-types'

const initialState = {
  data: {
    attributes: {}
  }
}

export default function article (state = initialState, action) {
  switch (action.type) {
    case FIND_ARTICLE_SUCCESS:
      const newState = {
        ...state,
        data: action.response.data
      }
      return newState
    default:
      return state
  }
}
