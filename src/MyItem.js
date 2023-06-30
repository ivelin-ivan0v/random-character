import React from "react";
import "./MyItem.css";

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0,
      remaining: 20,
      message: "",
    };
  }

  clickMe() {
    const { clicks, remaining } = this.state;

    if (remaining <= 0) {
      this.setState({
        message: "No more clicks remaining!!!",
      });
      return;
    }

    this.setState({
      //   clicks: this.state.clicks + 1,
      //   remaining: this.state.remaining - 1

      clicks: clicks + 1,
      remaining: remaining - 1,
    });
  }

  render() {
    return (
      <div>
        <button className="hello" onClick={() => this.clickMe()}>
          Hello from {this.props.firstName} {this.props.secondName}!
        </button>
        <br></br>

        <span>This button was clicked {this.state.clicks} times!</span>
        <br></br>

        <span>Remaining clicks are {this.state.remaining}!</span>
        <br></br>

        <span className="errorMessage">{this.state.message}</span>
      </div>
    );
  }
}

export default Item;
