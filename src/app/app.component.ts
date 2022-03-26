import { Component } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  n1;
  n2;
  resultado;
  operation(op) {
    if(this.n1 == undefined || this.n2 == undefined){
      alert("Digite um numero")
      return 
    }
    switch (op) {
      case '+':
        this.resultado = this.n1 + this.n2;
        break;
      case '-':
        this.resultado = this.n1 - this.n2;
        break;
      case '/':
        this.resultado = this.n1 / this.n2;
        break;
      case '*':
        this.resultado = this.n1 * this.n2;
        break;
        case '%':
        this.resultado = (this.n2 / 100) * this.n1;
        break;
    
    }
  }
Limpar(){
    this.n1 = disableDebugTools,
    this.n2 = disableDebugTools;
    this.resultado = undefined;
  }

}
