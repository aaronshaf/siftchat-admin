import React from 'react'

export default React.createClass({
  displayName: 'Articles',

  componentDidMount () {
    window.componentHandler &&
      this.refs.progress &&
      window.componentHandler.upgradeElement(this.refs.progress)
  },

  render () {
    const isLoading = this.props.articles.isLoading
    const articles = this.props.articles.data

    let articlesComponent
    if (articles.length) {
      const siteRows = articles.map((site) => {
        return (
          <tr key={site.id}>
            <td className='mdl-data-table__cell--non-numeric'>
              <a href={`/articles/${site.id}`}>{site.title}</a>
            </td>
            <td className='mdl-data-table__cell--non-numeric'>
              {site.path}
            </td>
            <td className='mdl-data-table__cell--non-numeric'>
              {site.lastActivityAt}
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
        <form method='post'>
          <main className='main'>
            <section className='asides-primary'>
              <aside className='aside fixed'>

              </aside>
            </section>
            <section className='asides-secondary'>
              <div id='wysiwyg-toolbar'></div>
              <div id='article-proposal-callout'></div>
            </section>
            <article className='article'>
              {articlesComponent}
            </article>
          </main>
        </form>
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
