import { Component, Input, OnInit } from '@angular/core';
import { IMessage } from '../model/IMessage.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: []
})
export class MessageComponent implements OnInit {

  @Input() messages: IMessage[];
  /**@internal*/
  showAll: boolean[] =[];
  /** @internal */
  limit:number = 30;
  constructor() { }

  ngOnInit(): void {
    // Initialize showAll directive by message length
    this.messages.forEach((message)=> {
      if (message.message.split(" ").length > this.limit ) this.showAll.push(false);
      else this.showAll.push(true);
    })
  }
  /**
   * Method to change status of showAll Message Text
   * @param index index of current message
   */
  triggerReadMore(index: number): void {
    this.showAll[index] = true;
  }
}
