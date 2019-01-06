import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { MessageComponent } from "./components/message/message.component";
import { MessageService } from "./services/message.service";
import { UserComponent } from "./components/user/user.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, MessageComponent, UserComponent],
  bootstrap: [AppComponent],
  providers: [MessageService]
})
export class AppModule {}
