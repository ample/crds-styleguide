import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class ThemeToggleSwitchService {

  // public state: String = 'off';
  public state = new BehaviorSubject<string>('off');

  // constructor() {
  //   console.log(this);
  // }

  public switch() {
    if (this.state.getValue() === 'on') {
      this.state.next('off');
    } else {
      this.state.next('on');
    }
    // console.log(this.state.getValue());
    console.log(this.state.observers);
    return this.state.getValue();
  }

  public isOn() {
    return this.state.getValue() === 'on';
  }

  public isOff() {
    return !this.isOn();
  }

}
