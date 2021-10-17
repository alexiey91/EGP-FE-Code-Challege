import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IMessage } from '../model/IMessage.model';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  private chatData$: BehaviorSubject<IMessage[]> = new BehaviorSubject<IMessage[]>(null);
  chat$: Observable<IMessage[]> = this.chatData$.asObservable().pipe(filter((source: IMessage[]) => (!! source)));

  set chat(chat: IMessage[]) {       
      this.chatData$.next(chat);
  }

  get chat(): IMessage[] {
      return this.chatData$.value;
  }

  /**
   * Function to set Mock Data into LocalStorage
   */
  setData(): void{
    let data: IMessage[] = [
      {
        isMine:false,
        link:'/assets/img/avatar1.png',
        message:"CIAO a tutti",
        name:"Utente 1",
        time:"2021-11-12 00:52"
      },
      {
        isMine:false,
        link:'/assets/img/avatar7.png',
        message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        name:"Utente 2",
        time:"2021-10-15 00:52"
      },
      {
        isMine:false,
        link:'/assets/img/avatar1.png',
        message:"CIAO a tutti",
        name:"Utente 1",
        time:"2021-09-19 00:52"
      },
      {
        isMine:true,
        link:'/assets/img/avatar3.png',
        message:"CIAO a tutti",
        name:"You",
        time:"2021-10-01 00:52"
      },
    ];

    //Check if there are some data on localStorage
    let chatData = localStorage.getItem('chat');
    
    if(!chatData){
      //TODO Call Api to order data by date
      this.sort(data);
      // Set data to Behaviour Subject
      this.chat = data;
      localStorage.setItem('chat',JSON.stringify(data));
    }else{
      //TODO call api to order data by date before to set
      this.sort(JSON.parse(chatData));
      // Parse data to assign to Object
      this.chat = JSON.parse(chatData);
    }

  }
  /**
   * 
   * @param msg newMessage to Add into localStorage
   */
  addData(msg: IMessage) : void{
    this.chat.push(msg);
    this.sort(this.chat);
    // Clear localStorage
    localStorage.removeItem('chat');
    // Create localStorage with new data
    localStorage.setItem('chat',JSON.stringify(this.chat));
  }

  sort(list: IMessage[]){
    list.sort(function(a, b) {
      var keyA = new Date(a.time),
        keyB = new Date(b.time);
      // Compare the 2 dates
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
  }
}
