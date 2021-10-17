import { Component, OnInit } from '@angular/core';
import { IMessage } from '../model/IMessage.model';
import { UtilsService } from '../service/utils.service';

@Component({
  selector: 'app-table-message',
  templateUrl: './table-message.component.html',
  styleUrls: ['./table-message.component.css']
})
export class TableMessageComponent implements OnInit {

  /**@internal */
  messageList: IMessage[] = [];
  /**@internal */
  newMessage: string = "";

  constructor(private utils: UtilsService) { }

  ngOnInit(): void {
    // Setting message List from Behaviour SUbject
    this.messageList = this.utils.chat;
  }

  /**
   * Method to write data inside chat
   */
  publish(){
    const date = new Date();
    const msg: IMessage = {
      isMine: true,
      link:"/assets/img/avatar3.png",
      message: this.newMessage,
      name: 'You',
      time: date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+ date.toLocaleTimeString("it-IT")
    }
    // Update Session data
    this.utils.addData(msg);
    // Reset chat Value
    this.newMessage = ''

  }

}
