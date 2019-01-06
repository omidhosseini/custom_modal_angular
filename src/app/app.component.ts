import { Component } from "@angular/core";
import { MassageService } from "./services/massage.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  constructor(private messageSrv: MassageService) {}

  openModal() {
    // send message to subscribers via observable subject
    this.messageSrv.openMessageModal("This message is from app.component!");
  }
}
