import React from 'react'

export default React.createClass({
  displayName: 'App',

  componentDidMount () {
    window.componentHandler && window.componentHandler.upgradeElement(this.refs.layout)
  },

  render () {
    return (
      <div
        className='mdl-layout mdl-js-layout mdl-layout--fixed-header'
        ref='layout'
      >
        <header className='mdl-layout__header'>
          <div className='mdl-layout__header-row'>
            <span className='mdl-layout-title'>{this.props.title}</span>
            <div className='mdl-layout-spacer'></div>
            <nav className='mdl-navigation mdl-layout--large-screen-only'>
              {
                this.props.session.userToken &&
                <a className='mdl-navigation__link' href='/logout'>Logout</a>
              }
              {
                !this.props.session.userToken &&
                <a className='mdl-navigation__link' href='/login?redirect=/'>Login</a>
              }
            </nav>
          </div>
        </header>
        <div className='mdl-layout__drawer'>
          <span className='mdl-layout-title'>{this.props.title}</span>
          <nav className='mdl-navigation'>
            <a className='mdl-navigation__link' href='/'>Sites</a>
          </nav>
        </div>
        <main className='mdl-layout__content'>
          <div className='page-content' style={{padding: 16}}>
            {this.props.children}
          </div>
        </main>
      </div>
    )
  }
})
