import Big from 'big.js';

export default class CalculatorService {
  private operand1: string = '0';
  private operand2: string = '';
  private _operator: string = '';

  get display(): string {
    if (this._operator === '') {
      return this.operand1;
    } else if (this.operand2 === '') {
      return this.operand1;
    } else {
      return this.operand2;
    }
  }

  get operator(): string {
    return this._operator;  
  }

  press(button: string): void {
    switch (button) {
      case 'C':
        this.operand2 = '0';
        break;
      case 'AC':
        this.clearAll();
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        this.handleOperator(button);
        break;
      case '.':
        this.handleDot();
        break;
      case '=':
        this.calculate();
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.handleDigit(button);
        break;
    }
  }

  handleDigit(digit: string): void {
    // If operator is empty then input is for the first operand
    if (this._operator === '') {
      // If operand is 0 then replace it with pressed digit
      if (this.operand1 === '0') {
        this.operand1 = digit;
      // Otherwise append digit
      } else {
        this.operand1 += digit;
      }
    // If operator is not empty then handle input for the second operand
    // If operand is 0 then replace it with pressed digit
    } else if (this.operand2 === '0') {
      this.operand2 = digit;
    // Otherwise append digit
    } else {
      this.operand2 += digit;
    }
  }

  handleOperator(operator: string): void {
    // If operator is not empty then do calculation with a previous operator
    if (this._operator !== '') {
      this.calculate();
    }

    // And update operator value
    this._operator = operator;
  }

  handleDot(): void {
    if (this._operator === '') {
      if (!this.operand1.includes('.')) {
        this.operand1 += '.';
      }
    } else if (this.operand2 === '') {
      this.operand2 = '0.';
    } else if (!this.operand2.includes('.')) {
      this.operand2 += '.';
    }
  }

  calculate(): void {
    let result = Big(0);

    // Convert both operands to Big numbers to preserve decimal point precision
    const operandNumber1 = Big(+this.operand1);
    const operandNumber2 = Big(+this.operand2);

    switch (this._operator) {
      case '+':
        result = operandNumber1.plus(operandNumber2);
        break;
      case '-':
        result = operandNumber1.minus(operandNumber2);
        break;
      case '/':
        result = operandNumber1.div(operandNumber2);
        break;
      case '*':
        result = operandNumber1.mul(operandNumber2);
        break;
    }

    // Result becomes first operand and the second operand becomes empty and
    // waiting for input number
    this.operand1 = result.toString();
    this.operand2 = '';
  }

  clearAll(): void {
    this.operand1 = '0';
    this.operand2 = '';
    this._operator = '';
  }
}