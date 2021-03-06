import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros',
  templateUrl: './juros.component.html',
  styleUrls: ['./juros.component.css'],
})
export class JurosComponent implements OnInit {
  vp;
  j;
  n;
  js: number;

  constructor() {
    this.vp = 0;
    this.j = 0;
    this.n = 0;
  }

  ngOnInit() {}

  getJurosSimples() {
    this.js = this.vp * (1 + (this.j / 100) * this.n);
    return this.js.toFixed(2);
  }

}
