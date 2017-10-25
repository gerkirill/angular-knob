import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-knob',
  templateUrl: './knob.component.html',
  styleUrls: ['./knob.component.css']
})
export class KnobComponent implements OnInit {

  constructor() { }

  public state;

  @Input() initialState = 'on';
  @Output() clicked = new EventEmitter();

  onClicked() {
    this.state = ['on', 'off'].find(_ => _ !== this.state);
    this.clicked.emit(this.state);
  }

  ngOnInit() {
    this.state = this.initialState;
  }

}
