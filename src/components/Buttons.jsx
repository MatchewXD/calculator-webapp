import '../App.css';
import React from 'react';
class Buttons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      output: '0',
      storedOP: '',
      storedRightOp: 0,
      firstSignState: true,
      parenthesisActive: false,
      operationContainer: ['0'],
      currentLevel: 0
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
    var pPhase = this.state.parenthesisActive;
    var opContainer = this.state.operationContainer;
    var cL = this.state.currentLevel;


    // function equals(str) {
    //   var isLeft = true;
    //   var leftOp = '';
    //   var rightOp = '';
    //   var cOp = '';
    //   var operands = ['+', '-', '*', '/'];

    //   if (firstSign) {
    //     str = Number(str);
    //     var firstResult = 0;

    //     if (sOp === '+') {
    //       firstResult = str + sROp;
    //     } else if (sOp === '-') {
    //       firstResult = str - sROp;
    //     } else if (sOp === '*') {
    //       firstResult = str * sROp;
    //     } else if (sOp === '/') {
    //       firstResult = str / sROp;
    //     } else if (sOp === '%') {
    //       firstResult = str / 100;
    //     }

    //     return firstResult.toString();
    //   }

    //   for (var i = 0; i < str.length; i++) {
    //     if (str[i] === '%') {
    //       sOp = '%';
    //       leftOp = Number(leftOp) / 100;
    //       leftOp = leftOp.toString();
    //     } else if (operands.includes(str[i])) {
    //       if (!isLeft) {
    //         leftOp = Number(leftOp);
    //         rightOp = Number(rightOp);

    //         if (cOp === '+') {
    //           leftOp = leftOp + rightOp;
    //         } else if (cOp === '-') {
    //           leftOp = leftOp - rightOp;
    //         } else if (cOp === '*') {
    //           leftOp = leftOp * rightOp;
    //         } else if (cOp === '/') {
    //           leftOp = leftOp / rightOp;
    //         }

    //         leftOp = leftOp.toString();
    //         rightOp = '';
    //         cOp = str[i];
    //       } else {
    //         cOp = str[i];
    //         isLeft = false;
    //       }

    //     } else {
    //       if (isLeft) {
    //         leftOp += str[i];
    //       } else {
    //         rightOp += str[i];
    //       }
    //     }
    //   }

    //   firstSign = true;
    //   leftOp = Number(leftOp);
    //   rightOp = Number(rightOp);
    //   var result = 0;

    //   if (cOp === '') {
    //     result = leftOp;
    //   } else if (cOp === '+') {
    //     sOp = '+';
    //     sROp = rightOp;
    //     result = leftOp + rightOp;
    //   } else if (cOp === '-') {
    //     sOp = '-';
    //     sROp = rightOp;
    //     result = leftOp - rightOp;
    //   } else if (cOp === '*') {
    //     sOp = '*';
    //     sROp = rightOp;
    //     result = leftOp * rightOp;
    //   } else if (cOp === '/') {
    //     sOp = '/';
    //     sROp = rightOp;
    //     result = leftOp / rightOp;
    //   } else {
    //     console.log('Operand is not added yet');
    //   }

    //   return result.toString();
    // }

    function equals() {
      // Input: an array of strings and arrays
      // Output: an array with a string
      var leftSide = true;
      var left = '';
      var currentOperator = '';
      var right = '';
      var equation = '' + opContainer;
      var result = 0;
      equation = equation.replace(/,/g, '');
      equation = equation.split(' ').join('');

      for (var i = 0; i < equation.length; i++) {
        if (equation[i] === '+' || equation[i] === '-' || equation[i] === '*' || equation[i] === '/') {
          currentOperator = equation[i];
          sOp = equation[i];
          leftSide = false;
        } else {
          if (leftSide) {
            left += equation[i];
          } else {
            right += equation[i];
            sROp = equation[i];
          }
        }
      }

      left = Number(left);
      if (right === '') {
        right = Number(sROp);
        currentOperator = sOp;
      } else {
        right = Number(right);
      }

      if (currentOperator === '+') {
        result = left + right;
      } else if (currentOperator === '-') {
        result = left - right;
      } else if (currentOperator === '*') {
        result = left * right;
      } else if (currentOperator === '/') {
        result = left / right;
      }

      result = result.toString();
      opContainer = [result];
    }

    function calculate(sym) {
      var isZero = true;

      if (outp !== '0') {
        isZero = false;
      }

      function updateCon(symb) {
        if (symb === 'AC') {
          outp = '0';
          opContainer = ['0'];
          return;
        }

        if (symb === '+' || symb === '-' || symb === '*' || symb === '/') {
          firstSign = false;
          opContainer[cL] += ' ' + symb + ' ';
          return;
        }

        if (symb === '%') {
          opContainer[cL] += symb;
          return;
        }

        if (symb === '=') {
          equals();
          return;
        }

        if (isZero) {
          opContainer[cL] = symb;
        } else {
          opContainer[cL] += symb;
        }
      }
      updateCon(sym);

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
    }
    calculate(cSymbol);
    outp = '' + opContainer;
    outp = outp.replace(/,/g, '');

    this.setState({ output: outp, storedOP: sOp, storedRightOp: sROp, firstSignState: firstSign, parenthesisPhase: pPhase, operationContainer: opContainer });
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