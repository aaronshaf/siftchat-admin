import React from 'react'
import { Textfield, FABButton, Icon } from 'react-mdl'
import { Editor, EditorState, ContentState, convertFromHTML } from 'draft-js'

export default React.createClass({
  displayName: 'Article',

  getInitialState () {
    const a = convertFromHTML('<div><a href="/foo">Bar</a></div>')
    const editorState = EditorState.createWithContent(ContentState.createFromBlockArray(a))
    return {
      editorState: editorState
    }
  },

  onChange (editorState) {
    this.setState({editorState})
  },

  componentDidMount () {
    this.refs.content.focus()
  },

  render () {
    // const { editorState } = this.state
    const isLoading = this.props.site.isLoading || this.props.article.isLoading
    const article = this.props.article.data
    const sitePath = this.props.site.data.path

    return (
      <div>
        <article>
          <h1>{article.title}</h1>
          {/*
          <Editor editorState={editorState} onChange={this.onChange} />
          */}
          <div ref='content' contentEditable={true} className='article-content' dangerouslySetInnerHTML={{__html: article.content.html}}></div>
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
          <Icon name='save' />
        </FABButton>
      </div>
    )
  }
})
