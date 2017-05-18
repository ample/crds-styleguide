import { Component } from '@angular/core';
import { ThemeToggleSwitchService } from '../../../directives/theme-toggle-switch/theme-toggle-switch.service';

@Component({
  providers: [ThemeToggleSwitchService],
  templateUrl: './datepicker.component.html'
})
export class FormDatepickerComponent {
  public dt: Date = new Date();

  constructor(private toggleState: ThemeToggleSwitchService) {
    console.log('FormDatepickerComponent ---');
    toggleState.stateChange.subscribe((value) => {
        console.log(`ThemeToggleSwitchComponent: ${value}`);
      }
    );
  }

  public today(): void {
    this.dt = new Date();
  }
}