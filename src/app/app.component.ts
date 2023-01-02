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
  res: number = 0;

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
    switch(this.funcT){      
      case 'NoFunction':
        this.n1 = this.calValue;
        this.showNum = 'N/A';
        this.funcT = val;  
        break;

      default:
        this.n2 = this.calValue;
        this.onFunctionCalculate(val);
        break;

    }
    

  }

  onFunctionCalculate(op: string){
     switch(this.funcT){
      case '+':
        console.log("Sumar números");
        this.res = this.n1 + this.n2;
        break;
      case '-':
        console.log("Restar números");
        this.res = this.n1 - this.n2;
        break;
      case 'x':
        console.log("Multiplicar números");
        this.res = this.n1 * this.n2;
        break;
      case '/':
        console.log("Dividir números");
        this.res = this.n1 / this.n2;
        break;
      case '%':
        console.log("Resto de división número");
        this.res = this.n1 % this.n2;
        break;
      case "=":
        this.onFunctionEquals();
        break;
    
    }

    this.calValue = this.res;
    this.n1 = this.res;
    this.n2 = 0;
    this.showNum ='N/A'
    this.funcT = op;

  }
  onFunctionEquals(){
    this.n1 = 0;
    this.n2 = 0;
    this.funcT = 'NoFunction';
    this.showNum = 'N/A';
   
  }

  onFunctionClear(){
    this.n1 = 0;
    this.n2 = 0;
    this.showNum = 'N/A';
    this.funcT = 'NoFunction'
    this.calValue = 0;
    this.res = 0;
    console.log("Memoria borrada.")

  }
 }
