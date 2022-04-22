import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-monster-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonsterCardComponent implements OnInit {

  @Output() monster = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
