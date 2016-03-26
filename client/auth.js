import Auth0Lock from 'auth0-lock'

let lock

export function getLock () {
  if (!lock) {
    lock = new Auth0Lock('YiqVZLpdpjn09wGo52JScE9DOsH0vxHS', 'raymati.auth0.com')
  }
  return lock
}
