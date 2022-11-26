import '../App.css';
import React from 'react';
import Calculator from './calculator.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fill: ''
    }

    // this.renderView = this.renderView.bind(this);
  }

  render() {
    return <div className="App">
      <Calculator />
    </div>;
  }
}

export default App;
