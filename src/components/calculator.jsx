import React from 'react';
import Buttons from './Buttons.jsx';
import BusinessCard from './BusinessCard.jsx';
import SpeechBubble from './SpeechBubble.jsx';
import Eyes from './Eyes.jsx';
import { create, all } from 'mathjs';
// import { motion } from 'framer-motion';

// import { Link } from 'react-router-dom';

const config = {};
const math = create(all, config);
class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      github: "https://github.com/MatchewXD",
      linkedin: "https://www.linkedin.com/in/matthew-seagren/",
      status: true,
      currentText: 0,
      output: '0',
      silent: 0
    }

    // this.renderView = this.renderView.bind(this)
    this.statusButton = this.statusButton.bind(this);
    this.textChange = this.textChange.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(e) {
    e.preventDefault();

    var cSymbol = e.target.textContent;
    var outp = this.state.output;

    function calculate(sym) {
      var isZero = false;

      if (outp === '0') {
        isZero = true;
      }

      function updateCon(symb) {
        if (symb === 'AC') {
          outp = '0';
          return;
        }

        if (symb === '+' || symb === '-' || symb === '*' || symb === '/') {
          if (isZero) {
            outp = ' ' + symb + ' ';
            return;
          } else {
            outp += ' ' + symb + ' ';
            return;
          }
        }

        if (symb === '%') {
          outp += symb;
          return;
        }

        if (symb === '=') {
          outp = [math.evaluate(outp)];
          return;
        }

        if (isZero) {
          outp = symb;
        } else {
          outp += symb;
        }
      }
      updateCon(sym);
    }
    calculate(cSymbol);

    if (cSymbol === '=') {
      this.textChange();
    }

    this.setState({ output: outp });
  }

  statusButton(e) {
    e.preventDefault();

    var status = this.state.status;
    var cText = this.state.currentText;

    if (status) { // Wake Calc
      status = false;
      cText = 0;
    } else { // Sleep Calc
      status = true;
      cText = 1;
    }

    this.setState({ status: status, currentText: cText });
  }

  textChange() {
    var count = this.state.silent;
    var cText = this.state.currentText;
    var check = Math.floor(Math.random() * 100);

    if (check > 66 || count >= 2) {
      cText = Math.floor(Math.random() * 11) + 3;
      // testing
      // cText = 13;
      count = 0;
    } else {
      cText = 2;
      count++;
    }

    this.setState({ silent: count, currentText: cText });
  }

  render() {
    return <div className="webpage">
      <BusinessCard />
      <div className="calc-container">
        {this.state.status ? null : <SpeechBubble cText={this.state.currentText} />}
        <Eyes />
        <div className="calc">
          <div className="calc-inner-frame">
            <div className="output-field">
              <p className="output-text">{this.state.output}</p>
            </div>
            <Buttons buttonClick={this.buttonClick} />
          </div>
        </div>
        <div className="status-button" onClick={this.statusButton} >
          {this.state.status ? <p className="status-text">Wake</p> : <p className="status-text">Sleep</p>}
        </div>
      </div>
      {/* <div className="testani">
        <div className="testani2"></div>
      </div> */}
      {/* <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        animate={{ x: [5, 100, 0] }}
        className="testButton"
        onClick={() => console.log("Clicked Motion Button")}
      >
        Test Button
      </motion.button> */}
    </div >;
  }
}

export default Calculator