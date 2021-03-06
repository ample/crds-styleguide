import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ThemeToggleSwitchService } from './theme-toggle-switch.service';

@Component({
  selector: 'theme-toggle-switch',
  template: `
    <a class="theme-toggle-switch" (click)="onSwitch()">
      <svg class="icon icon-1" viewBox="0 0 256 256"><use height="256" width="256" xlink:href="/assets/svgs/icons.svg#contrast"></use></svg>
    </a>
  `
})
export class ThemeToggleSwitchComponent {

  private body;
  private selector: String = 'dark-theme';

  @Output() stateChange = new EventEmitter<any>();

  constructor(private toggleSwitchService: ThemeToggleSwitchService) {
    this.body = document.getElementsByTagName('body')[0];
  }

  onSwitch() {
    this.toggleSwitchService.toggleState();
    this.toggleClass();
  }

  toggleClass() {
    if (this.toggleSwitchService.currentState === 'on') {
      this.body.classList.add(this.selector);
    } else {
      this.body.classList.remove(this.selector);
    }
  }
}
