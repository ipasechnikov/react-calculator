import React from 'react';
import { Component, ReactNode } from 'react';
import CalculatorService from '../services/CalculatorService';
import './Calculator.css';
import CalculatorButton from './CalculatorButton';
import CalculatorDisplay from './CalculatorDisplay';

export default class Calculator extends Component {
  private readonly calculatorService: CalculatorService = new CalculatorService();

  constructor(props: any) {
    super(props);
    this.state = {
      display: this.calculatorService.display
    };
  }

  createHandleClick(button: string): () => void {
    return () => {
      this.calculatorService.press(button);
      this.setState({ display: this.calculatorService.display });
    };
  }

  render(): ReactNode {
    return (
      <div className="calculator">
        <div className="calculator__display">
          <CalculatorDisplay displayValue={this.calculatorService.display} />
        </div>
        <div className="calculator__buttons">
          <div className="calculator__button calculator__button--control">
            <CalculatorButton symbol="AC" onClick={this.createHandleClick('AC')}/>
          </div>
          <div className="calculator__button calculator__button--control">
            <CalculatorButton symbol="+/-" onClick={this.createHandleClick('+/-')}/>
          </div>
          <div className="calculator__button calculator__button--control">
            <CalculatorButton symbol="%" onClick={this.createHandleClick('%')}/>
          </div>
          <div className="calculator__button calculator__button--operation">
            <CalculatorButton symbol="÷" onClick={this.createHandleClick('/')}/>
          </div>
          <div className="calculator__button calculator__button--digit">
            <CalculatorButton symbol="7" onClick={this.createHandleClick('7')}/>
          </div>
          <div className="calculator__button calculator__button--digit">
            <CalculatorButton symbol="8" onClick={this.createHandleClick('8')}/>
          </div>
          <div className="calculator__button calculator__button--digit">
            <CalculatorButton symbol="9" onClick={this.createHandleClick('9')}/>
          </div>
          <div className="calculator__button calculator__button--operation">
            <CalculatorButton symbol="x" onClick={this.createHandleClick('*')}/>
          </div>
          <div className="calculator__button calculator__button--digit">
            <CalculatorButton symbol="4" onClick={this.createHandleClick('4')}/>
          </div>
          <div className="calculator__button calculator__button--digit">
            <CalculatorButton symbol="5" onClick={this.createHandleClick('5')}/>
          </div>
          <div className="calculator__button calculator__button--digit">
            <CalculatorButton symbol="6" onClick={this.createHandleClick('6')}/>
          </div>
          <div className="calculator__button calculator__button--operation">
            <CalculatorButton symbol="-" onClick={this.createHandleClick('-')}/>
          </div>
          <div className="calculator__button calculator__button--digit">
            <CalculatorButton symbol="1" onClick={this.createHandleClick('1')}/>
          </div>
          <div className="calculator__button calculator__button--digit">
            <CalculatorButton symbol="2" onClick={this.createHandleClick('2')}/>
          </div>
          <div className="calculator__button calculator__button--digit">
            <CalculatorButton symbol="3" onClick={this.createHandleClick('3')}/>
          </div>
          <div className="calculator__button calculator__button--operation">
            <CalculatorButton symbol="+" onClick={this.createHandleClick('+')}/>
          </div>
          <div className="calculator__button calculator__button--digit calculator__button--wide">
            <CalculatorButton symbol="0" onClick={this.createHandleClick('0')}/>
          </div>
          <div className="calculator__button calculator__button--digit">
            <CalculatorButton symbol="." onClick={this.createHandleClick('.')}/>
          </div>
          <div className="calculator__button calculator__button--operation">
            <CalculatorButton symbol="=" onClick={this.createHandleClick('=')}/>
          </div>
        </div>
      </div>
    );
  } 
}