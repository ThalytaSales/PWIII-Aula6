import { Component } from '@angular/core';

@Component({
  selector: 'has-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  peso = 70 ;
  altura  = 1.70 ;
  

  exibir() : void {
    let imc = this.peso / (this.altura * this.altura);
    alert("IMC é: " + imc) 
  }
}
