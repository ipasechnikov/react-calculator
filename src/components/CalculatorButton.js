import './CalculatorButton.css';

export default function CalculatorButton({ symbol, onClick }) {
  return (
    <div className="calculator-button" onClick={onClick}>
      <div className="calculator-button__symbol">
        { symbol }
      </div>
    </div>
  );
}