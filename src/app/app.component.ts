import { Component, OnInit } from '@angular/core';
import { UtilsService } from './service/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'egp-fe-code-challange';
  
  constructor(private utilService: UtilsService){}
  
  
  ngOnInit(): void {
    //Call function to set Mock data into LocalStorage
    this.utilService.setData();
  }


}
