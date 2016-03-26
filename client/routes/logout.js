import { logout } from '../actions/session'

export default ({ context, router, resolve }) => {
  logout()
  resolve()
}
