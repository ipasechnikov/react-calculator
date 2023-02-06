import CalculatorService from "./CalculatorService";

describe('calculator service', () => {
  test('when calculator initialized displayed value is 0', () => {
    const service = new CalculatorService();
    expect(service.display).toBe('0');
  });

  test('display digits on input', () => {
    const service = new CalculatorService();

    service.press('5');
    expect(service.display).toBe('5');

    service.press('0');
    expect(service.display).toBe('50');

    service.press('1');
    expect(service.display).toBe('501');
  });

  test('display first operand after operator selected if second operand was not input', () => {
    const service = new CalculatorService();

    service.press('1');
    service.press('2');
    service.press('3');
    service.press('+');

    expect(service.display).toBe('123');
  });

  test('display second operand during its input', () => {
    const service = new CalculatorService();

    service.press('1');
    service.press('2');
    service.press('3');
    service.press('+');

    service.press('4');
    expect(service.display).toBe('4');

    service.press('5');
    expect(service.display).toBe('45');
  });

  test('simple sum', () => {
    const service = new CalculatorService();
    
    service.press('1');
    service.press('2');
    service.press('+');
    expect(service.display).toBe('12');

    service.press('3');
    service.press('4');
    service.press('=');

    expect(service.display).toBe('46');
  });

  test('consecutive operations', () => {
    const service = new CalculatorService();

    service.press('1');
    service.press('+');
    service.press('9');
    expect(service.display).toBe('9');

    service.press('-');
    expect(service.display).toBe('10');

    service.press('4');
    service.press('=');
    expect(service.display).toBe('6');

    service.press('/');
    service.press('3');
    expect(service.display).toBe('3');

    service.press('+');
    expect(service.display).toBe('2');
  });

  test('dot for the first operand', () => {
    const service = new CalculatorService();

    service.press('.');
    expect(service.display).toBe('0.');

    service.press('+');
    service.press('3');
    service.press('=');
    expect(service.display).toBe('3');
  });

  test('dot for the second operand', () => {
    const service = new CalculatorService();

    service.press('1');
    service.press('+');
    expect(service.display).toBe('1');

    service.press('.');
    expect(service.display).toBe('0.');

    service.press('5');
    service.press('.');
    expect(service.display).toBe('0.5');

    service.press('2');
    service.press('3');
    expect(service.display).toBe('0.523');

    service.press('=');
    expect(service.display).toBe('1.523');
  });

  test('C button for the second operator', () => {
    const service = new CalculatorService();

    service.press('5');
    service.press('-');
    expect(service.display).toBe('5');

    service.press('6');
    service.press('1');
    expect(service.display).toBe('61');

    service.press('C');
    expect(service.display).toBe('0');

    service.press('1');
    expect(service.display).toBe('1');

    service.press('=');
    expect(service.display).toBe('4');
  });
});