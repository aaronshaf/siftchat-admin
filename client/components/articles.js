import React from 'react'
import { ProgressBar, Textfield, FABButton, Icon } from 'react-mdl'

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
    const sitePath = this.props.site.data.path
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
        <Textfield
          onChange={this.handleSearchInput}
          label='Text...'
          style={{width: '200px'}}
        />
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
        <FABButton
          className='fixed-button-right'
          colored
          href={`/sites/${sitePath}/articles/add`}
          ripple
        >
          <Icon name='add' />
        </FABButton>
      </div>
    )
  }
})
