import React from 'react'
import { ProgressBar } from 'react-mdl'

export default React.createClass({
  displayName: 'Articles',

  handleSearchInput (event) {
    const listArticles = this.props.listArticles
    const sitePath = this.props.site.data.path
    const query = event.target.value
    listArticles(sitePath, query)
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
              <a href={`/sites/${site.path}/articles/${article.path}`}>{article.title}</a>
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
        <form action='#' ref='form'>
          <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
            <input
              className='mdl-textfield__input'
              id='sample3'
              onInput={this.handleSearchInput}
              type='text'
            />
            <label ref='input' className='mdl-textfield__label' htmlFor='sample3'>Search</label>
          </div>
        </form>
        {articlesComponent}
        {
          isLoading &&
          <ProgressBar indeterminate />
        }
      </div>
    )
  }
})
