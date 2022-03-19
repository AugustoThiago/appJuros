import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros',
  templateUrl: './juros.component.html',
  styleUrls: ['./juros.component.css']
})
export class JurosComponent implements OnInit {
  vp: number;
  j:  number;
  n:  number;
  js: number;
  jc: number;
  
  juro;

  constructor() {
    this.vp = 0;
    this.j = 0;
    this.n = 0;
  }

  ngOnInit() {
  }
  
getJurosSimples(){
  this.js = this.vp*(1+this.j/100*this.n);
  return this.js.toFixed(2)
}

getJurosCompostos(){
    this.jc = this.vp*Math.pow(1+this.j/100*this.n,this.n);
    return this.jc.toFixed(2)
   }
}