import './CalculatorDisplay.css';

export default function CalculatorDisplay({ displayValue }) {
  return (
    <div className="calculator-display">
      <div className="calculator-display__value">
        { displayValue }
      </div>
    </div>
  )
}