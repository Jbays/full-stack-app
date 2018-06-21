import React, { Component } from 'react';

class CommentBox extends Component {
  state = {comment: ''};


  //receives event object representing user's typing in textarea
  handleChange = (event)=>{
    this.setState({ comment: event.target.value });
  };

  handleSubmit = (event)=>{
    event.preventDefault();

    //call action creater
    //and save comment
    this.setState({ comment:'' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add Comment</h4>
        <textarea onChange={this.handleChange}value={this.state.comment}/>
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    )
  }
}

export default CommentBox;
