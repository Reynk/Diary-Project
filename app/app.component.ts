import { Component } from "@angular/core";

@Component({
  selector: "gr-login",
  templateUrl: "login/login.component.html",
  styleUrls: ["login/login.component.css"]
})
export class AppComponent {
  email = "cont";
  submit() {
    alert("hi");
  }
}