import './CalculatorButton.css';

export default function CalculatorButton({ symbol, onClick }) {
  return (
    <div className="calculator-button">
      <div className="calculator-button__symbol">
        { symbol }
      </div>
    </div>
  );
}