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
  userList: string[] = []
  /**@internal */
  newMessage: string = "";
  /**@internal */
  selectedUserList: string [] = [];
  constructor(private utils: UtilsService) { }

  ngOnInit(): void {
    // Setting message List from Behaviour SUbject
    this.messageList = this.utils.chat;
    this.userList = [... new Set(this.messageList.map((message: IMessage)=> message.name))];
    

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

  /**
   * 
   * @param user user select by multiselect value
   */
  selectedUser(user:string){
    // User not filtered
    if(!this.selectedUserList.includes(user)){
      // Add new user inside list
      this.selectedUserList.push(user);
      // Filter messageList by source and show it
      this.messageList = this.utils.filterMessage(this.utils.chat,this.selectedUserList);
    }else{
      // Remove element from list 
      var index = this.selectedUserList.indexOf(user);
      if (index > -1) {
        this.selectedUserList.splice(index, 1);
        // If empty list restore message
        if(this.selectedUserList.length == 0) this.messageList = this.utils.chat;
      }
    }
  }

}
