import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
