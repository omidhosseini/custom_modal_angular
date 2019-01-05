import { Component } from '@angular/core';
import { MassageService } from './services/massage.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appComponentMessage = 'Message From App Component'
  name = 'Angular';
  closed = true;

  constructor(private messageSrv: MassageService) { 
  }

  closedAction(e) {
    console.log(e);
  }
  openModal(e) {
    // send message to subscribers via observable subject
    this.messageSrv.openMessageModal('Message from app Component to message Component!');
  }
}
