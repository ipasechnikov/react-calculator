import { useState } from 'react';
import './Calculator.css';
import CalculatorButton from './CalculatorButton';
import CalculatorDisplay from './CalculatorDisplay';

export default function Calculator() {
  let [displayValue, setDisplayValue] = useState('0');

  return (
    <div className="calculator">
      <div className="calculator__display">
        <CalculatorDisplay displayValue={displayValue} />
      </div>
      <div className="calculator__buttons">
        <div className="calculator__button calculator__button--control">
          <CalculatorButton symbol="AC" />
        </div>
        <div className="calculator__button calculator__button--control">
          <CalculatorButton symbol="+/-" />
        </div>
        <div className="calculator__button calculator__button--control">
          <CalculatorButton symbol="%" />
        </div>
        <div className="calculator__button calculator__button--operation">
          <CalculatorButton symbol="÷" />
        </div>
        <div className="calculator__button calculator__button--digit">
          <CalculatorButton symbol="7" />
        </div>
        <div className="calculator__button calculator__button--digit">
          <CalculatorButton symbol="8" />
        </div>
        <div className="calculator__button calculator__button--digit">
          <CalculatorButton symbol="9" />
        </div>
        <div className="calculator__button calculator__button--operation">
          <CalculatorButton symbol="x" />
        </div>
        <div className="calculator__button calculator__button--digit">
          <CalculatorButton symbol="4" />
        </div>
        <div className="calculator__button calculator__button--digit">
          <CalculatorButton symbol="5" />
        </div>
        <div className="calculator__button calculator__button--digit">
          <CalculatorButton symbol="6" />
        </div>
        <div className="calculator__button calculator__button--operation">
          <CalculatorButton symbol="-" />
        </div>
        <div className="calculator__button calculator__button--digit">
          <CalculatorButton symbol="1" />
        </div>
        <div className="calculator__button calculator__button--digit">
          <CalculatorButton symbol="2" />
        </div>
        <div className="calculator__button calculator__button--digit">
          <CalculatorButton symbol="3" />
        </div>
        <div className="calculator__button calculator__button--operation">
          <CalculatorButton symbol="+" />
        </div>
        <div className="calculator__button calculator__button--digit calculator__button--wide">
          <CalculatorButton symbol="0" />
        </div>
        <div className="calculator__button calculator__button--digit">
          <CalculatorButton symbol="." />
        </div>
        <div className="calculator__button calculator__button--operation">
          <CalculatorButton symbol="=" />
        </div>
      </div>
    </div>
  );
}