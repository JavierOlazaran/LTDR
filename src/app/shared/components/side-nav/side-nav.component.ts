import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ScreenResizeService} from '../../../core/services/screen-resize.service';
import {MOBILE_SCREEN_WIDTH} from '../../constants/app.constants';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent implements OnInit, AfterViewInit {

  @ViewChild('desktopNav')
  desktopNav?: TemplateRef<any>;

  @ViewChild('mobileNav')
  mobileNav?: TemplateRef<any>;

  optionTemplateRef?: TemplateRef<any>;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private screenResizeSvc: ScreenResizeService) {
  }

  ngOnInit(): void {
    this.screenResizeSvc.listenToScreenResize().subscribe(
      screenSize => this.updateView(screenSize.innerWidth)
    );
  }

  ngAfterViewInit(): void {
    this.optionTemplateRef = window.innerWidth > MOBILE_SCREEN_WIDTH ? this.desktopNav : this.mobileNav;
    this.changeDetector.detectChanges();
  }

  updateView(screenWidth: number): void {
    this.optionTemplateRef = screenWidth > MOBILE_SCREEN_WIDTH ? this.desktopNav : this.mobileNav;
    this.changeDetector.detectChanges();
  }
}
