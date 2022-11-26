import '../App.css';
import React from 'react';
class Buttons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      output: '0',
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
    var pPhase = this.state.parenthesisPhase;

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

      // function parPhase(par) { // Parenthesis Function
      // console.log("A Parenthesis was used");
      // when left par is added the calculator should auto add a left par
      // When right par is pressed the calulator should end the par phase

      // During the par phase any new symbol added is placed left of the right par
      // When equals() runs it should calculate operations in parenthesis seperatly probably in a
      // recursive function
      // when no operation is present in a par phase the return "ERROR"
      // when only a number exists in the par phase return that number
      // when a number is left of the par phase the equal function assume the number to the left is multiplied by the result of the par phase
      // }

      if (sym === 'AC') {
        outp = '0';
      } else if (sym === "(") {
        checkZero('(');
      } else if (sym === ")") {
        checkZero(')');
      } else if (sym === "%") {
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

    this.setState({ output: outp, storedOP: sOp, storedRightOp: sROp, firstSignState: firstSign, parenthesisPhase: pPhase });
  }


  render() {
    return <div>
      <div className="output-field">
        <p className="output-text">{this.state.output}</p>
      </div>
      <div className="buttons-frame" >
        <div className="calc-button left-paratheses" onClick={this.buttonClick}>
          <p className="button-symbol">(</p>
        </div>
        <div className="calc-button right-paratheses" onClick={this.buttonClick}>
          <p className="button-symbol">)</p>
        </div>
        <div className="calc-button percent" onClick={this.buttonClick}>
          <p className="button-symbol">%</p>
        </div>
        <div className="calc-button ac" onClick={this.buttonClick}>
          <p className="button-symbol">AC</p>
        </div>
        <div className="calc-button seven" onClick={this.buttonClick}>
          <p className="button-symbol">7</p>
        </div>
        <div className="calc-button eight" onClick={this.buttonClick}>
          <p className="button-symbol">8</p>
        </div>
        <div className="calc-button nine" onClick={this.buttonClick}>
          <p className="button-symbol">9</p>
        </div>
        <div className="calc-button slash" onClick={this.buttonClick}>
          <p className="button-symbol">/</p>
        </div>
        <div className="calc-button four" onClick={this.buttonClick}>
          <p className="button-symbol">4</p>
        </div>
        <div className="calc-button five" onClick={this.buttonClick}>
          <p className="button-symbol">5</p>
        </div>
        <div className="calc-button six" onClick={this.buttonClick}>
          <p className="button-symbol">6</p>
        </div>
        <div className="calc-button astrix" onClick={this.buttonClick}>
          <p className="button-symbol">*</p>
        </div>
        <div className="calc-button one" onClick={this.buttonClick}>
          <p className="button-symbol">1</p>
        </div>
        <div className="calc-button two" onClick={this.buttonClick}>
          <p className="button-symbol">2</p>
        </div>
        <div className="calc-button three" onClick={this.buttonClick}>
          <p className="button-symbol">3</p>
        </div>
        <div className="calc-button minus" onClick={this.buttonClick}>
          <p className="button-symbol">-</p>
        </div>
        <div className="calc-button zero" onClick={this.buttonClick}>
          <p className="button-symbol">0</p>
        </div>
        <div className="calc-button period" onClick={this.buttonClick}>
          <p className="button-symbol">.</p>
        </div>
        <div className="calc-button equals" onClick={this.buttonClick}>
          <p className="button-symbol">=</p>
        </div>
        <div className="calc-button plus" onClick={this.buttonClick}>
          <p className="button-symbol">+</p>
        </div>
      </div>
    </div>;
  }
}

export default Buttons;