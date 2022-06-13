import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleItemComponent implements OnInit {

  // TODO: La hora del item debería ser dinámica respecto de la zona horaria del usuario.
  constructor() { }

  ngOnInit(): void {
  }

}
