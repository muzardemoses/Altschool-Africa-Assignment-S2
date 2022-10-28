import { Component } from "react";
import '../Assets/styles/error-boundary.css';
import warningImg from '../Assets/images/warning-one.png';


export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // You can render any custom fallback UI
      return (
        <div>
          <img src={warningImg} alt="warning" className="warning-img"/>
          <h className="error-h"> <span className="non"></span>  Something went wrong.</h>
          <details>
            <summary>Click to expand</summary>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      )
    }

    return this.props.children; 
  }
}


export class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({counter}) => ({
      counter: counter + 1
    }));
  }

  render() {
    if (this.state.counter === 5) {
      // Simulate a JS error
      throw new Error('F**k I crashed! I am a robot!');
    }
    return  <button onClick={this.handleClick} className="error-btn">{this.state.counter}</button>;
  }
}
