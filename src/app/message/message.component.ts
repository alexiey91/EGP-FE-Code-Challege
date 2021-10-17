import { Component, Input, OnInit } from '@angular/core';
import { IMessage } from '../model/IMessage.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: []
})
export class MessageComponent implements OnInit {

  @Input() messages: IMessage[];
  constructor() { }

  ngOnInit(): void {
  }

}
