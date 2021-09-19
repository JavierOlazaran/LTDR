import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-schedule-block',
  templateUrl: './schedule-block.component.html',
  styleUrls: ['./schedule-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleBlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
