import { Injectable, Input, Output, EventEmitter } from '@angular/core';
// import { Subject } from 'rxjs/Subject';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class ThemeToggleSwitchService {

  public state = 'off';
  // public state = new BehaviorSubject<string>('off');
  // public state = new BehaviorSubject<string>('off');
  // @Output() state = new EventEmitter<string>('off');
  @Output() stateChange: EventEmitter<string> = new EventEmitter<string>();

  // constructor() {
  //   console.log(this);
  // }

  public switch() {
    if (this.state === 'on') {
      this.state = 'off';
      this.stateChange.emit(this.state);
    } else {
      this.state = 'on';
      this.stateChange.emit(this.state);
    }
    // console.log(this.state.getValue());
    // console.log(this.state.observers);
    // return this.state.getValue();
    return this.state;
  }

  public isOn() {
    return this.state === 'on';
  }

  public isOff() {
    return !this.isOn();
  }

}
