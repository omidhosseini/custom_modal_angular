import { Component, OnInit } from "@angular/core";
import { MessageService } from "src/app/services/message.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private messageSrv: MessageService) {}

  openModal() {
    // send message to subscribers via observable subject
    this.messageSrv.openMessageModal("This message is from Home component!");
  }

  ngOnInit() {}
}
