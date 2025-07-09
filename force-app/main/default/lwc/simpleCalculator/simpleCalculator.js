import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    @track firstNumber = '';
    @track secondNumber = '';
    @track result;
    @track history = [];

    onchangedHandler(event) {
        const label = event.target.label;
        if (label === 'firstNumber') {
            this.firstNumber = event.target.value;
        } else if (label === 'secondNumber') {
            this.secondNumber = event.target.value;
        }
    }

    calculate(operator) {
        const a = parseFloat(this.firstNumber);
        const b = parseFloat(this.secondNumber);

        if (isNaN(a) || isNaN(b)) {
            this.result = 'Error: invalid input';
            return;
        }

        let res;
        switch (operator) {
            case 'add':
                res = a + b;
                break;
            case 'sub':
                res = a - b;
                break;
            case 'mul':
                res = a * b;
                break;
            case 'div':
                res = b === 0 ? '∞' : a / b;
                break;
        }

        this.result = res;
        const expr = `${a} ${this.getSymbol(operator)} ${b} = ${res}`;
        this.history = [expr, ...this.history];
    }

    getSymbol(op) {
        return {
            add: '+',
            sub: '–',
            mul: '×',
            div: '÷'
        }[op];
    }

    addHandler()     { this.calculate('add'); }
    subHandler()     { this.calculate('sub'); }
    multiplyHandler(){ this.calculate('mul'); }
    divideHandler()  { this.calculate('div'); }

    get currentResult() {
        return this.result !== undefined ? this.result : '';
    }
}
