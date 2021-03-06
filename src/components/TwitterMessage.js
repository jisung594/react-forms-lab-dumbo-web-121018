import React from "react";

class TwitterMessage extends React.Component {
  state = {
    value: ""
  }

  handler = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handler}/>
        <p>Characters Left: {this.props.maxChars - this.state.value.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
