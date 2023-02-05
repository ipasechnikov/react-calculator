import Big from 'big.js';

export default class CalculatorService {
  private operand1: string = '0';
  private operand2: string = '';
  private operator: string = '';

  get display(): string {
    if (this.operator === '') {
      return this.operand1;
    } else if (this.operand2 === '') {
      return this.operand1;
    } else {
      return this.operand2;
    }
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
    if (this.operator === '') {
      if (this.operand1 === '0') {
        this.operand1 = digit;
      } else {
        this.operand1 += digit;
      }
    } else if (this.operand2 === '0') {
      this.operand2 = digit;
    } else {
      this.operand2 += digit;
    }
  }

  handleOperator(operator: string): void {
    if (this.operator !== '') {
      this.calculate();
    }

    this.operator = operator;
  }

  handleDot(): void {
    if (this.operator === '') {
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
    let result;
    const operandNumber1 = Big(+this.operand1);
    const operandNumber2 = Big(+this.operand2);

    switch (this.operator) {
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

    this.operand1 = result.toString();
    this.operand2 = '';
  }

  clearAll(): void {
    this.operand1 = '0';
    this.operand2 = '';
    this.operator = '';
  }
}