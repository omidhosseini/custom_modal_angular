import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { MessageComponent } from "./components/message/message.component";
import { MessageService } from "./services/message.service";
import { UserComponent } from "./components/user/user.component";
import { APP_BASE_HREF } from "@angular/common";
import { HomeComponent } from "./components/pages/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "user",
    component: UserComponent
  },
  { path: "**", component: AppComponent }
];
@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    HelloComponent,
    MessageComponent,
    UserComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent],
  providers: [MessageService, { provide: APP_BASE_HREF, useValue: "" }]
})
export class AppModule {}
