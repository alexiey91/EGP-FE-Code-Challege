import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { TableMessageComponent } from './table-message/table-message.component';
import { UtilsService } from './service/utils.service';
import { FormsModule } from '@angular/forms';
import { TextTruncatePipe } from './pipe/text-truncate.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    TableMessageComponent,
    TextTruncatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule)