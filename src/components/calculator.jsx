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
      output: "0"
    }

    // this.renderView = this.renderView.bind(this)
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(e) {
    e.preventDefault();

    var cSymbol = e.target.textContent;
    var outp = this.state.output;

    function equals(str) {
      var isLeft = true;
      var leftOp = '';
      var rightOp = '';
      var cOp = '';
      var operands = ['+', '-', '*', '/', '%'];


      for (var i = 0; i < str.length; i++) {
        if (operands.includes(str[i])) {
          if (!isLeft) {
            debugger;
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

      leftOp = Number(leftOp);
      rightOp = Number(rightOp);

      if (cOp === '+') {
        return leftOp + rightOp;
      } else if (cOp === '-') {
        return leftOp - rightOp;
      } else if (cOp === '*') {
        return leftOp * rightOp;
      } else if (cOp === '/') {
        return leftOp / rightOp;
      } else {
        console.log('Operand is not added yet');
      }
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
        console.log('Button pressed is AC');
        outp = '0';
      } else if (sym === "(") {
        console.log('Button pressed is (');
        checkZero('(');
      } else if (sym === ")") {
        console.log('Button pressed is )');
        checkZero(')');
      } else if (sym === "%") {
        console.log('Button pressed is %');
        // checkZero('%');
        outp += '%';
      } else if (sym === "7") {
        console.log('Button pressed is 7');
        checkZero('7');
      } else if (sym === "8") {
        console.log('Button pressed is 8');
        checkZero('8');
      } else if (sym === "9") {
        console.log('Button pressed is 9');
        checkZero('9');
      } else if (sym === "/") {
        console.log('Button pressed is /');
        // checkZero('/');
        outp += ' / ';
      } else if (sym === "4") {
        console.log('Button pressed is 4');
        checkZero('4');
      } else if (sym === "5") {
        console.log('Button pressed is 5');
        checkZero('5');
      } else if (sym === "6") {
        console.log('Button pressed is 6');
        checkZero('6');
      } else if (sym === "*") {
        console.log('Button pressed is *');
        outp += ' * ';
      } else if (sym === "1") {
        console.log('Button pressed is 1');
        checkZero('1');
      } else if (sym === "2") {
        console.log('Button pressed is 2');
        checkZero('2');
      } else if (sym === "3") {
        console.log('Button pressed is 3');
        checkZero('3');
      } else if (sym === "-") {
        console.log('Button pressed is -');
        outp += ' - ';
      } else if (sym === "0") {
        console.log('Button pressed is 0');
        checkZero('0');
      } else if (sym === ".") {
        console.log('Button pressed is .');
        outp += '.';
      } else if (sym === "=") {
        console.log('Button pressed is =');
        outp = outp.split(' ').join('');
        // console.log(outp);
        outp = equals(outp);
      } else if (sym === "+") {
        console.log('Button pressed is +');
        outp += ' + ';
      } else {
        console.log('Button is not logged');
      }
    }
    calculate(cSymbol);

    this.setState({ output: outp });
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