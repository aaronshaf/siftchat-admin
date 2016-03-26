import React from 'react'

export default React.createClass({
  displayName: 'FrontPage',

  render () {
    const isLoading = this.props.sites.isLoading
    const sites = this.props.sites.data

    let sitesComponent
    if (isLoading) {
      sitesComponent = (
        <div
          className='mdl-progress mdl-js-progress mdl-progress__indeterminate'
          id='p2'
        ></div>
      )
    }
    if (sites.length) {
      const siteRows = sites.map((site) => {
        return (
          <tr key={site.id}>
            <td className='mdl-data-table__cell--non-numeric'>
              <a href={`/sites/${site.id}`}>{site.title}</a>
            </td>
            <td className='mdl-data-table__cell--non-numeric'>
              {site.tagline}
            </td>
          </tr>
        )
      })
      sitesComponent = (
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
              <h1>Sites</h1>
              {sitesComponent}
            </article>
          </main>
        </form>
      </div>
    )
  }
})