import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-compostos',
  templateUrl: './juros-compostos.component.html',
  styleUrls: ['./juros-compostos.component.css']
})
export class JurosCompostosComponent implements OnInit {
  cvp;
  cj;
  cn;
  jc: number;

  constructor() {
    this.cvp = 0;
    this.cj = 0;
    this.cn = 0;
   }

  ngOnInit() {
  }
  
  getJurosCompostos() {
    this.jc = this.cvp * Math.pow(1 + (this.cj / 100) * this.cn, this.cn);
    return this.jc.toFixed(2);
  }

}