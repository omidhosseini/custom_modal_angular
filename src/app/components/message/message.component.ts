import { Component, OnDestroy } from '@angular/core';
import { MassageService } from '../../services/massage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnDestroy {

  message: any = {};
  isShow: boolean;
  subscription: Subscription;
  
  constructor(private messageService: MassageService) {
    // subscribe to app component messages
    this.subscription = this.messageService.getMessage()
      .subscribe(message => {
        this.message = message;
        this.isShow = message.isOpen;
      });
  }

  close() {
    this.subscription = this.messageService.closeMessageModal()
      .subscribe(message => {
        this.message = message;
        this.isShow = message.isOpen;
      });
  
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks 

  }
}