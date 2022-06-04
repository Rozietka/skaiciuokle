import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skaiciuokle',
  templateUrl: './skaiciuokle.component.html',
  styleUrls: ['./skaiciuokle.component.css']
})
export class SkaiciuokleComponent implements OnInit {

  public tekstas: string="cia is TS";

  constructor() { }

  ngOnInit(): void {
  }

}
