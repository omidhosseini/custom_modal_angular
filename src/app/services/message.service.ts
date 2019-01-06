import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class MessageService {
  private subject = new Subject<any>();
  private _isOpen: boolean;

  constructor() {}

  sendMessage(message: string) {
    this.subject.next({ text: message });
  }

  openMessageModal(message: string) {
    this.subject.next({ text: message, isOpen: true });
  }

  closeMessageModal(): Observable<any> {
    this.subject.next({ text: "", isOpen: false });
    return this.subject.asObservable();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  clearMessage() {
    this.subject.next();
  }
}
