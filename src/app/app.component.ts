import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Global variables
  title = 'calculator-app';

  calValue: number = 0;
  showNum: string = 'N/A'
  funcT: any = 'NoFunction'

  n1: number = 0;
  n2: number = 0;

  onClickButton (val: string, type: any) {
    switch(type){
      case 'number':
        this.onNumberClick(val);
        break;
      case 'function':
        this.onFunctionClick(val);
        break;  

    }
  }

  onNumberClick(val: string) {
    if(this.showNum !== 'N/A') {
      this.showNum = this.showNum + val;

    }else{
      this.showNum = val;
    }

    this.calValue = parseFloat(this.showNum);
  }

  onFunctionClick(val: string) {
    
    switch(val){
      case 'NoFunction':
        this.n1 = this.calValue;
        this.calValue = 0;
        this.showNum = 'N/A';
        this.funcT = val;
        break;

      default:
        this.n2 = this.calValue;
        this.onFunctionCalculate(val);


    }

  }

  onFunctionCalculate(op: string){
     switch(op){
      case '+':
        console.log("Sumar números");
        this.calValue = this.n1 + this.n2;
        break;
      case '-':
        console.log("Restar números");
        this.calValue = this.n1 - this.n2;
        break;
      case 'x':
        console.log("Multiplicar números");
        this.calValue = this.n1 * this.n2;
        break;
      case '/':
        console.log("Dividir números");
        this.calValue = this.n1 / this.n2;
        break;
      case '%':
        console.log("Porcentaje del número");
        this.calValue = this.n1 * 0.01;
        break;

      case 'C':
        console.log("Borrar memoria")
        this.onFunctionClear();
        break;

      case '=':
        console.log("Resultado operación")
        this.onFunctionEquals(op);

        break;

    }
    this.n1 = this.calValue;
    this.n2 = 0;
    this.showNum = 'N/A';
    this.funcT = op;
    

  }
  onFunctionEquals(op: string){
    this.funcT = op;
   
  }

  onFunctionClear(){
    this.n1 = 0;
    this.n2 = 0;
    this.showNum = 'N/A';
    this.funcT = 'NoFunction'
    this.calValue = 0;

  }
 }
