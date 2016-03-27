import React from 'react'

export default React.createClass({
  displayName: 'Site',

  componentDidMount () {
    window.componentHandler &&
      this.refs.progress &&
      window.componentHandler.upgradeElement(this.refs.progress)
  },

  render () {
    const isLoading = this.props.site.isLoading
    const site = this.props.site.data

    return (
      <div>
        <h1 style={{display: 'none'}}>
          {site.title}
        </h1>
        <ul>
          <li>
            <a href={`/sites/${site.path}/articles`}>Articles</a>
          </li>
          <li>
            <a href={`/sites/${site.path}/asides`}>Asides</a>
          </li>
          <li>
            <a href={`/sites/${site.path}/aliases`}>Aliases</a>
          </li>
        </ul>
        {
          isLoading &&
          <div
            className='mdl-progress mdl-js-progress mdl-progress__indeterminate'
            id='p2'
            ref='progress'
            style={{bottom: 0, position: 'fixed', width: '100%'}}
          ></div>
        }
      </div>
    )
  }
})
