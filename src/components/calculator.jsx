import React from 'react';
import Buttons from './Buttons.jsx';
import BusinessCard from './BusinessCard.jsx';
import SpeechBubble from './SpeechBubble.jsx';
import Eyes from './Eyes.jsx';
// import { Link } from 'react-router-dom';

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      github: "https://github.com/MatchewXD",
      linkedin: "https://www.linkedin.com/in/matthew-seagren/",
      status: true,
      currentText: 0
    }

    // this.renderView = this.renderView.bind(this)
    this.statusButton = this.statusButton.bind(this);
    this.textChange = this.textChange.bind(this);
  }

  statusButton(e) {
    e.preventDefault();

    var status = this.state.status;
    var cText = this.state.currentText;
    // console.log("Wake was pressed: ", status);
    if (status) {
      status = false;
      cText = 0;
    } else {
      status = true;
      cText = 1;
    }
    this.setState({ status: status, currentText: cText });
  }

  textChange(e) {
    e.preventDefault();

    console.log('The changed occured');
  }

  render() {
    return <div className="webpage">
      <BusinessCard />
      <div className="calc-container">
        {this.state.status ? null : <SpeechBubble cText={this.state.currentText} />}
        <Eyes />
        <div className="calc">
          <div className="calc-inner-frame">
            <Buttons textC={this.textChange} />
          </div>
        </div>
        <div className="status-button" onClick={this.statusButton} >
          {this.state.status ? <p className="status-text">Wake</p> : <p className="status-text">Sleep</p>}
        </div>
      </div>
    </div >;
  }
}

export default Calculator