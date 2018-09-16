import React, { Component } from 'react';

class Intro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }

  render() {

    return (
      <div>
        <p className="App-intro">
          <h2>time: { this.state.time }</h2>
        </p>        
      </div>
    );
  }
}
 export default Intro;