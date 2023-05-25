import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration form';

  displayName = '';
  displayAddress = '';
  displayContact = '';
  displayEmail = '';

  getValue(name: string, address: string, contact: string, email: string) {
    this.displayName = name;
    this.displayAddress = address;
    this.displayContact = contact;
    this.displayEmail = email;

  }
}
