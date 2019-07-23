import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../model/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  userSettings: UserSettings = {
    name: 'Jose Gomera',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'here are some notes'
  };
  constructor() { }

  ngOnInit() {
    console.log(this.userSettings);
  }

}
