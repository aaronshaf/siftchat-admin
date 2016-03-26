import {
  SET_USER_TOKEN,
  LOGOUT,
  GET_PROFILE_SUCCESS
} from '../constants/action-types'

const initialState = {
  userToken: window.localStorage.getItem('userToken'),
  profile: {}
}

export default function article (state = initialState, action) {
  switch (action.type) {
    case SET_USER_TOKEN:
      return {
        ...state,
        userToken: action.userToken
      }

    case LOGOUT:
      return initialState

    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.profile
      }

    default:
      return state
  }
}
