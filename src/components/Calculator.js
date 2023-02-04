import './Calculator.css';
import CalculatorButton from './CalculatorButton';

export default function Calculator() {
  return (
    <div className="calculator">
      <div className="calculator-row">
        <CalculatorButton symbol="AC"/>
        <CalculatorButton symbol="+/-"/>
        <CalculatorButton symbol="%"/>
        <CalculatorButton symbol="/"/>
      </div>
      <div className="calculator-row">
        <CalculatorButton symbol="7"/>
        <CalculatorButton symbol="8"/>
        <CalculatorButton symbol="9"/>
        <CalculatorButton symbol="x"/>
      </div>
      <div className="calculator-row">
        <CalculatorButton symbol="4"/>
        <CalculatorButton symbol="5"/>
        <CalculatorButton symbol="6"/>
        <CalculatorButton symbol="-"/>
      </div>
      <div className="calculator-row">
        <CalculatorButton symbol="1"/>
        <CalculatorButton symbol="2"/>
        <CalculatorButton symbol="3"/>
        <CalculatorButton symbol="+"/>
      </div>
      <div className="calculator-row">
        <CalculatorButton symbol="0"/>
        <CalculatorButton symbol="."/>
        <CalculatorButton symbol="="/>
      </div>
    </div>
  );
}