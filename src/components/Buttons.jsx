import '../App.css';

function Buttons(props) {
  return (
    <div className="buttons-frame">
      <div className="calc-button left-paratheses" onClick={props.buttonClick}>
        <p className="button-symbol">(</p>
      </div>
      <div className="calc-button right-paratheses" onClick={props.buttonClick}>
        <p className="button-symbol">)</p>
      </div>
      <div className="calc-button percent" onClick={props.buttonClick}>
        <p className="button-symbol">%</p>
      </div>
      <div className="calc-button ac" onClick={props.buttonClick}>
        <p className="button-symbol">AC</p>
      </div>
      <div className="calc-button seven" onClick={props.buttonClick}>
        <p className="button-symbol">7</p>
      </div>
      <div className="calc-button eight" onClick={props.buttonClick}>
        <p className="button-symbol">8</p>
      </div>
      <div className="calc-button nine" onClick={props.buttonClick}>
        <p className="button-symbol">9</p>
      </div>
      <div className="calc-button slash" onClick={props.buttonClick}>
        <p className="button-symbol">/</p>
      </div>
      <div className="calc-button four" onClick={props.buttonClick}>
        <p className="button-symbol">4</p>
      </div>
      <div className="calc-button five" onClick={props.buttonClick}>
        <p className="button-symbol">5</p>
      </div>
      <div className="calc-button six" onClick={props.buttonClick}>
        <p className="button-symbol">6</p>
      </div>
      <div className="calc-button astrix" onClick={props.buttonClick}>
        <p className="button-symbol">*</p>
      </div>
      <div className="calc-button one" onClick={props.buttonClick}>
        <p className="button-symbol">1</p>
      </div>
      <div className="calc-button two" onClick={props.buttonClick}>
        <p className="button-symbol">2</p>
      </div>
      <div className="calc-button three" onClick={props.buttonClick}>
        <p className="button-symbol">3</p>
      </div>
      <div className="calc-button minus" onClick={props.buttonClick}>
        <p className="button-symbol">-</p>
      </div>
      <div className="calc-button zero" onClick={props.buttonClick}>
        <p className="button-symbol">0</p>
      </div>
      <div className="calc-button period" onClick={props.buttonClick}>
        <p className="button-symbol">.</p>
      </div>
      <div className="calc-button equals" onClick={props.buttonClick}>
        <p className="button-symbol">=</p>
      </div>
      <div className="calc-button plus" onClick={props.buttonClick}>
        <p className="button-symbol">+</p>
      </div>
    </div>
  );
}

export default Buttons;