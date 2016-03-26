import React from 'react'

export default React.createClass({
  displayName: 'Site',

  render () {
    const site = this.props.site.data
    return (
      <div>
        <h1 style={{display: 'none'}}>
          {site.title}
        </h1>
        <ul>
          <li>
            <a href={`/sites/${site.id}/articles`}>Articles</a>
          </li>
          <li>
            <a href={`/sites/${site.id}/asides`}>Asides</a>
          </li>
          <li>
            <a href={`/sites/${site.id}/aliases`}>Aliases</a>
          </li>
        </ul>
      </div>
    )
  }
})
