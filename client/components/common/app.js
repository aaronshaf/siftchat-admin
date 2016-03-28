import React from 'react'
import { IconButton, Menu, MenuItem } from 'react-mdl'

export default React.createClass({
  displayName: 'App',

  render () {
    const sitePath = this.props.site.data.path
    return (
      <div
        className='mdl-layout mdl-js-layout mdl-layout--fixed-header'
        ref='layout'
      >
        <header className='mdl-layout__header'>
          <div className='mdl-layout__header-row'>
            <IconButton name='more_vert' id='demo-menu-lower-left' />
            <Menu target='demo-menu-lower-left'>
              <MenuItem>
                <a href='/'>Sites</a>
              </MenuItem>
              {
                sitePath &&
                <MenuItem>
                  <a href={`/sites/${sitePath}/articles`}>Articles</a>
                </MenuItem>
              }
            </Menu>
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
        {/*
        <div className='mdl-layout__drawer'>
          <span className='mdl-layout-title'>{this.props.title}</span>
          <nav className='mdl-navigation'>
            <a className='mdl-navigation__link' href='/'>Sites</a>
            {
              siteId &&
              <a className='mdl-navigation__link' href={`/sites/${siteId}/articles`}>Articles</a>
            }
          </nav>
        </div>
        */}
        <main className='mdl-layout__content'>
          <div className='page-content' style={{padding: 16}}>
            {this.props.children}
          </div>
        </main>
      </div>
    )
  }
})
