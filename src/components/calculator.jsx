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
    }

    // this.renderView = this.renderView.bind(this)
  }

  render() {
    return <div className="webpage">
      <BusinessCard />
      <div className="calc-container">
        <SpeechBubble />
        <Eyes />
        <div className="calc">
          <div className="calc-inner-frame">
            <Buttons buttonClick={this.buttonClick} />
          </div>
        </div>
        <div className="status-button">
          <p className="status-text">Wake</p>
        </div>
      </div>
    </div >;
  }
}

export default Calculator