import { Component, OnInit } from "@angular/core";
import { MessageService } from "src/app/services/message.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  constructor(private msgService: MessageService) {}

  ngOnInit() {}

  openModal(customMessage: string) {
    this.msgService.openMessageModal(customMessage);
  }
}
