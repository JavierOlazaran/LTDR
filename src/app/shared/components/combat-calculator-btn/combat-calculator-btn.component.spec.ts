import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatCalculatorBtnComponent } from './combat-calculator-btn.component';

describe('CombatCalculatorBtnComponent', () => {
  let component: CombatCalculatorBtnComponent;
  let fixture: ComponentFixture<CombatCalculatorBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombatCalculatorBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatCalculatorBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
