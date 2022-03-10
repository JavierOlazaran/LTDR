import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-combat-calculator-btn',
  templateUrl: './combat-calculator-btn.component.html',
  styleUrls: ['./combat-calculator-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CombatCalculatorBtnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
