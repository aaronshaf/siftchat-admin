import React from 'react'

export default React.createClass({
  displayName: 'Article',

  componentDidMount () {
    window.componentHandler &&
      this.refs.progress &&
      window.componentHandler.upgradeElement(this.refs.progress)
  },

  render () {
    const isLoading = this.props.site.isLoading || this.props.article.isLoading
    const article = this.props.article.data

    return (
      <article>
        <h1>{article.title}</h1>
        {
          article.content &&
          <div className='article-content' dangerouslySetInnerHTML={{__html: article.content.html}}></div>
        }
        {
          isLoading &&
          <div
            className='mdl-progress mdl-js-progress mdl-progress__indeterminate'
            id='p2'
            ref='progress'
            style={{bottom: 0, position: 'fixed', width: '100%'}}
          ></div>
        }
      </article>
    )
  }
})
