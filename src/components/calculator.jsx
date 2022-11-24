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
      output: "0",
      storedOP: '',
      storedRightOp: 0,
      firstSignState: true
    }

    // this.renderView = this.renderView.bind(this)
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(e) {
    e.preventDefault();

    var cSymbol = e.target.textContent;
    var outp = this.state.output;
    var sOp = this.state.storedOP;
    var sROp = this.state.storedRightOp;
    var firstSign = this.state.firstSignState;

    function equals(str) {
      var isLeft = true;
      var leftOp = '';
      var rightOp = '';
      var cOp = '';
      var operands = ['+', '-', '*', '/'];

      if (firstSign) {
        str = Number(str);
        var firstResult = 0;

        if (sOp === '+') {
          firstResult = str + sROp;
        } else if (sOp === '-') {
          firstResult = str - sROp;
        } else if (sOp === '*') {
          firstResult = str * sROp;
        } else if (sOp === '/') {
          firstResult = str / sROp;
        } else if (sOp === '%') {
          firstResult = str / 100;
        }

        return firstResult.toString();
      }

      for (var i = 0; i < str.length; i++) {
        if (str[i] === '%') {
          sOp = '%';
          leftOp = Number(leftOp) / 100;
          leftOp = leftOp.toString();
        } else if (operands.includes(str[i])) {
          if (!isLeft) {
            leftOp = Number(leftOp);
            rightOp = Number(rightOp);

            if (cOp === '+') {
              leftOp = leftOp + rightOp;
            } else if (cOp === '-') {
              leftOp = leftOp - rightOp;
            } else if (cOp === '*') {
              leftOp = leftOp * rightOp;
            } else if (cOp === '/') {
              leftOp = leftOp / rightOp;
            }

            leftOp = leftOp.toString();
            rightOp = '';
            cOp = str[i];
          } else {
            cOp = str[i];
            isLeft = false;
          }

        } else {
          if (isLeft) {
            leftOp += str[i];
          } else {
            rightOp += str[i];
          }
        }
      }

      firstSign = true;
      leftOp = Number(leftOp);
      rightOp = Number(rightOp);
      var result = 0;

      if (cOp === '') {
        result = leftOp;
      } else if (cOp === '+') {
        sOp = '+';
        sROp = rightOp;
        result = leftOp + rightOp;
      } else if (cOp === '-') {
        sOp = '-';
        sROp = rightOp;
        result = leftOp - rightOp;
      } else if (cOp === '*') {
        sOp = '*';
        sROp = rightOp;
        result = leftOp * rightOp;
      } else if (cOp === '/') {
        sOp = '/';
        sROp = rightOp;
        result = leftOp / rightOp;
      } else {
        console.log('Operand is not added yet');
      }

      return result.toString();
    }

    function calculate(sym) {
      var isZero = true;
      if (outp !== '0') {
        isZero = false;
      }

      function checkZero(symb) {
        if (isZero) {
          outp = symb;
        } else {
          outp += symb;
        }
      }

      if (sym === 'AC') {
        outp = '0';
      } else if (sym === "(") {
        checkZero('(');
      } else if (sym === ")") {
        checkZero(')');
      } else if (sym === "%") {
        debugger;
        firstSign = false;
        outp += '%';
      } else if (sym === "7") {
        checkZero('7');
      } else if (sym === "8") {
        checkZero('8');
      } else if (sym === "9") {
        checkZero('9');
      } else if (sym === "/") {
        firstSign = false;
        outp += ' / ';
      } else if (sym === "4") {
        checkZero('4');
      } else if (sym === "5") {
        checkZero('5');
      } else if (sym === "6") {
        checkZero('6');
      } else if (sym === "*") {
        firstSign = false;
        outp += ' * ';
      } else if (sym === "1") {
        checkZero('1');
      } else if (sym === "2") {
        checkZero('2');
      } else if (sym === "3") {
        checkZero('3');
      } else if (sym === "-") {
        firstSign = false;
        outp += ' - ';
      } else if (sym === "0") {
        checkZero('0');
      } else if (sym === ".") {
        outp += '.';
      } else if (sym === "=") {
        outp = outp.split(' ').join('');
        outp = equals(outp);
      } else if (sym === "+") {
        firstSign = false;
        outp += ' + ';
      } else {
        console.log('Button is not logged');
      }
    }
    calculate(cSymbol);

    this.setState({ output: outp, storedOP: sOp, storedRightOp: sROp, firstSignState: firstSign });
  }

  render() {
    return <div className="webpage">
      <BusinessCard />
      <div className="calc-container">
        <SpeechBubble />
        <Eyes />
        <div className="calc">
          <div className="calc-inner-frame">
            <div className="output-field">
              <p className="output-text">{this.state.output}</p>
            </div>
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