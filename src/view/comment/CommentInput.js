import React, { Component } from "react"
import { parseTime } from '@/utils/index'
class CommentInput extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      content: '',
    }
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    })
  }

  handleContentChange(e) {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit(e) {
    if (this.props.onSubmit) {
      const { username, content } = this.state
      const time = parseTime(new Date().getTime(), '{y}-{m}-{d} {h}:{i}:{s}')
      console.log('new Date() :', time);
      this.props.onSubmit({ username, content, time })
    }
    this.setState({ content: '' })
  }


  render() {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input
              value={this.state.username}
              onChange={this.handleUsernameChange.bind(this)} />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea
              value={this.state.content}
              onChange={this.handleContentChange.bind(this)}
            />
          </div>
        </div>
        <div className='comment-field-button'>
          <button
            onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput
