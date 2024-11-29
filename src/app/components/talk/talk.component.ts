import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Talk } from '../../talk.model';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrl: './talk.component.css',
})
export class TalkComponent {
  @Input()
  talk?: Talk;

  @Output()
  onClick = new EventEmitter<Talk>();

  constructor() {}

  editTalk(talk: Talk) {
    this.onClick.emit(talk);
  }
}
