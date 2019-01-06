import { Component } from "@angular/core";
import { MessageService } from "./services/message.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  constructor(private messageSrv: MessageService) {}

  openModal() {
    // send message to subscribers via observable subject
    this.messageSrv.openMessageModal("This message is from app.component!");
  }
}
