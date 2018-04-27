import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
  <StackLayout>
    <Image src="~/images/login.png"></Image>
    <TextField hint="Email Address" keyboardType="email"
      autocorrect="false" autocapitalizationType="none"></TextField>
    <TextField hint="Password" secure="true"></TextField>

    <Button text="Sign in" class="submit-button"></Button>
    <Button text="Sign up"></Button>
  </StackLayout>
  `,
  styleUrls: ["pages/login/login-common.css"]
})
export class AppComponent {
  // Your TypeScript logic goes here
}
