import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

 
  public popoverStatusTitle: string = 'Confirm Save Change';
  public popoverStatusMessage: string = 'Are you sure you want to save changes.?';
  public cancelClicked: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  tableList: Object[] = [
    { intSettingsId: 1, name: 'Fax Number', description:'Default fax number', old_value:'+1-201-254-5690'},
    // { intSettingsId: 2, name: 'Opportunity Follow-up Days', description:'Opportunity Follow-up Days', old_value:'10'},
    { intSettingsId: 2, name: 'Grid Length', description:'Default Grid Length', old_value:'10'},
    { intSettingsId: 3, name: 'Notification Email', description:'Default Admin Notification Email	', old_value:'admin@sapphire.com'},
    // { intSettingsId: 4, name: 'Time Zone', description:'Default Time Zone', old_value:'EDT'},

  ];

  saveSettings() {
    
  }

}
