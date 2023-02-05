import './CalculatorDisplay.css';

export default function CalculatorDisplay({ displayValue }) {
  return (
    <div className="calculator-display">
      { displayValue }
    </div>
  )
}