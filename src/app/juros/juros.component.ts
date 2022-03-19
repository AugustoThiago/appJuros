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
  jc: number;
  list;

  constructor() {
    this.vp = 100;
    this.j = 2.5;
    this.n = 3;
  }

  ngOnInit() {
  }
  
getJurosSimples(){
  return this.vp*(1+this.j/100*this.n)
}

getJurosCompostos(){
  this.jc = this.vp*(1+this.j/100*this.n)
  return Math.pow(this.jc,this.n).toFixed(2);
}
}