import React from 'react'
import Head from 'react-helmet'

function Login (props) {
  return (
    <div>
      <Head title='Login' />
    </div>
  )
}

export default ({ params, resolve }) => {
  resolve(<Login />)
}
