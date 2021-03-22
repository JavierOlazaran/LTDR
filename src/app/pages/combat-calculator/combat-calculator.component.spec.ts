import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CombatCalculatorComponent } from './combat-calculator.component';

describe('CombatCalculatorComponent', () => {
  let component: CombatCalculatorComponent;
  let fixture: ComponentFixture<CombatCalculatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
