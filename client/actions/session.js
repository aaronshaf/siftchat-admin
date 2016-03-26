import React from 'react'
import { getLock } from '../auth'
import {
  SET_USER_TOKEN,
  LOGOUT,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR
} from '../constants/action-types'
import { getState, dispatch } from '../store'

export function ensureLogin ({router}) {
  if (!getState().session.userToken) {
    router.navigate('/login')
  } else if (!getState().session.profile.email) {
    getProfile()
  }
}

export function login ({ context, resolve, router }) {
  const lock = getLock()

  const authHash = lock.parseHash(window.location.hash)
  console.log({authHash})
  if (authHash && authHash.id_token) {
    setUserToken(authHash.id_token)
    router.navigate('/')
    getProfile()
    resolve(<div>Login</div>)
    return
  }

  if (!getState().session.userToken) {
    lock.show({
      authParams: {
        scope: 'openid name email picture roles app_metadata'
      }
    })
    resolve(<div></div>)
    return
  }
  getProfile()
}

export function setUserToken (userToken) {
  window.localStorage.setItem('userToken', userToken)
  dispatch({
    type: SET_USER_TOKEN,
    userToken
  })
}

export function getProfile () {
  const lock = getLock()
  const userToken = getState().session.userToken
  lock.getProfile(userToken, function (error, profile) {
    if (error) {
      dispatch({
        type: GET_PROFILE_ERROR,
        error
      })
      return
    }
    dispatch({
      type: GET_PROFILE_SUCCESS,
      profile
    })
  })
}

export function logout ({ router }) {
  const lock = getLock()
  window.localStorage.removeItem('userToken')
  dispatch({
    type: LOGOUT
  })
  lock.logout({
    returnTo: window.location.href.replace('logout', '')
  })
  router.navigate('/login')
}
