import { Component, Input, OnInit } from '@angular/core';
import { Juego } from 'src/app/models';

@Component({
  selector: 'app-juego-tabs',
  templateUrl: './juego-tabs.component.html',
  styleUrls: ['./juego-tabs.component.scss']
})
export class JuegoTabsComponent implements OnInit {
  @Input() juego: Juego | any

  constructor() { }

  ngOnInit(): void {
  }

}
