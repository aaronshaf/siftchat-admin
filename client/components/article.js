import React from 'react'
import { Textfield, FABButton, Icon } from 'react-mdl'

export default React.createClass({
  displayName: 'Article',

  render () {
    const isLoading = this.props.site.isLoading || this.props.article.isLoading
    const article = this.props.article.data
    const sitePath = this.props.site.data.path

    return (
      <div>
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
        <FABButton
          className='fixed-button-right'
          colored
          href={`/sites/${sitePath}/articles/${article.path}/edit`}
          ripple
        >
          <Icon name='edit' />
        </FABButton>
      </div>
    )
  }
})
