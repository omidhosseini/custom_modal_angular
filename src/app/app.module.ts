import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MessageComponent } from './components/message/message.component';
import { MassageService } from './services/massage.service'; 

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MessageComponent,   ],
  bootstrap:    [ AppComponent ],
  providers: [MassageService]
})
export class AppModule { }
