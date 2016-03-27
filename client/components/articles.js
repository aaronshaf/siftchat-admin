import React from 'react'

export default React.createClass({
  displayName: 'Articles',

  componentDidMount () {
    window.componentHandler &&
      this.refs.progress &&
      window.componentHandler.upgradeElement(this.refs.progress)
  },

  render () {
    const isLoading = this.props.articles.isLoading || this.props.site.isLoading
    const articles = this.props.articles.data
    const site = this.props.site.data

    let articlesComponent
    if (articles.length) {
      const siteRows = articles.map((article) => {
        return (
          <tr key={article.id}>
            <td className='mdl-data-table__cell--non-numeric'>
              <a href={`/sites/${site.id}/articles/${article.id}`}>{article.title}</a>
            </td>
            <td className='mdl-data-table__cell--non-numeric'>
              {article.path}
            </td>
            <td className='mdl-data-table__cell--non-numeric'>
              {article.lastActivityAt}
            </td>
          </tr>
        )
      })
      articlesComponent = (
        <table className='mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp'>
          <tbody>
            {siteRows}
          </tbody>
        </table>
      )
    }

    return (
      <div>
        {articlesComponent}
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
