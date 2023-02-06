import Big from 'big.js';

export default class CalculatorService {
  private operand1: string = '0';
  private operand2: string = '';
  private _operator: string = '';

  private readonly operandMaxLength = 10;

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
      case '%':
        this.handlePercent();
        break;
      case '+/-':
        this.handlePlusMinus();
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

  private handleDigit(digit: string): void {
    // If operator is empty then input is for the first operand
    if (this._operator === '') {
      // If operand is 0 then replace it with pressed digit
      if (this.operand1 === '0') {
        this.operand1 = digit;
      // Otherwise append digit
      } else if (this.operand1.length < this.operandMaxLength) {
          this.operand1 += digit;
      }
    // If operator is not empty then handle input for the second operand
    // If operand is 0 then replace it with pressed digit
    } else if (this.operand2 === '0') {
      this.operand2 = digit;
    // Otherwise append digit
    } else if (this.operand2.length < this.operandMaxLength) {
      this.operand2 += digit;
    }
  }

  private handleOperator(operator: string): void {
    this._operator = operator;
  }

  private handleDot(): void {
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

  private handlePercent(): void {
    if (this.operand2 === '') {
      const operandNum = Big(this.operand1);
      this.operand1 = (operandNum.div(100)).toString();
    } else {
      const operandNum1 = Big(this.operand1);
      const operandNum2 = Big(this.operand2);
      this.operand2 = operandNum1.div(100).mul(operandNum2).toString();
    }
  }

  private handlePlusMinus(): void {
    if (this.operand2 === '') {
      this.operand1 = Big(this.operand1).neg().toString();
    } else {
      this.operand2 = Big(this.operand2).neg().toString();
    }
  }

  private calculate(): void {
    let result = Big(0);

    // Don't do any calculations if second operator is empty
    if (this.operand2 === '') {
      return;
    }

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

  private clearAll(): void {
    this.operand1 = '0';
    this.operand2 = '';
    this._operator = '';
  }
}