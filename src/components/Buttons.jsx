import '../App.css';
import React from 'react';
import { create, all } from 'mathjs';

const config = {};
const math = create(all, config);
class Buttons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      output: '0'
    }

    // this.renderView = this.renderView.bind(this)
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

    this.setState({ output: outp });
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