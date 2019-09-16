import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';

@Component({
  selector: 'app-event-log',
  templateUrl: './event-log.component.html',
  styleUrls: ['./event-log.component.scss']
})
export class EventLogComponent implements OnInit {

  tableList: any;

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

filterToggle: boolean;

public searchText: string;
public page: any;
public settings: Settings;
constructor(public appSettings: AppSettings,
  public dialog: MatDialog) {
  this.settings = this.appSettings.settings;
}

ngOnInit() {
  this.tableList = [  
    {id : 1 , eventDate : "Jul 20 2019 10:27AM" , eventName : "Attempt to View Event Log Screen - Event Log" , patientName : "--" , user : "Admin, System" , userType : "Main Admin" , publicIp : "172.69.106.25" , location : "Chennai, Tamil Nadu, India"},
    {id : 2 , eventDate : "Jul 20 2019 2:40AM" , eventName : "Attempt to View Summary Dashboard - Admin Summary Dashboard" , patientName : "--" , user : "Admin, System" , userType : "Main Admin" , publicIp : "172.69.106.25" , location : "Chennai, Tamil Nadu, India"},
    {id : 3 , eventDate : "Jul 20 2019 2:40AM" , eventName : "Successful Login - Admin Authentication" , patientName : "--" , user : "Admin, System" , userType : "Main Admin" , publicIp : "172.69.106.25" , location : "Chennai, Tamil Nadu, India"},
    {id : 4 , eventDate : "Jul 20 2019 2:40AM" , eventName : "Successful Login - Admin Authentication" , patientName : "--" , user : "Visitor" , userType : "Visitor" , publicIp : "172.69.106.25" , location : "Chennai, Tamil Nadu, India"},
    {id : 5 , eventDate : "Jul 20 2019 1:35AM" , eventName : "Successfully Updated Patient Profile - Manage Patient Orders" , patientName : "Fabrice Vanegas" , user : "Admin, System" , userType : "Admin" , publicIp : "172.69.106.25" , location : "Chennai, Tamil Nadu, India"},
    {id : 6 , eventDate : "Jul 20 2019 1:35AM" , eventName : "Attempt to Update Patient - Manage Patient Orders" , patientName : "Fabrice Vanegas" , user : "Admin, System" , userType : "Admin" , publicIp : "172.69.106.25" , location : "Chennai, Tamil Nadu, India"},
    {id : 7 , eventDate : "Jul 20 2019 1:08AM" , eventName : "Attempt to View Confirm Appointments Screen - Confirm Appointments" , patientName : "--" , user : "Admin, System" , userType : "Admin" , publicIp : "172.68.167.25" , location : "Hyderabad, Telangana, India"},
    {id : 8 , eventDate : "Jul 20 2019 12:57AM" , eventName : "Attempt to View Assign Schedules Screen - Assign Schedules" , patientName : "--" , user : "Admin, System" , userType : "Admin" , publicIp : "172.68.167.25" , location : "Hyderabad, Telangana, India"},
    {id : 9 , eventDate : "Jul 20 2019 12:44AM" , eventName : "Attempt to View Order Details - Manage Patient Orders" , patientName : "Stephen McGill" , user : "Admin, System" , userType : "Admin" , publicIp : "172.68.167.25" , location : "Hyderabad, Telangana, India"},
    {id : 10 , eventDate : "Jul 20 2019 12:43AM" , eventName : "Attempt to View Manage Patient Orders Screen - Manage Patient Orders" , patientName : "--" , user : "Admin, System" , userType : "Admin" , publicIp : "172.68.167.25" , location : "Hyderabad, Telangana, India"},
    {id : 11 , eventDate : "Jul 20 2019 12:41AM" , eventName : "Attempt to View Insurance Verification Form - Verify Insurance Benefits" , patientName : "Stephen McGill" , user : "Admin, System" , userType : "Admin" , publicIp : "172.68.167.25" , location : "Hyderabad, Telangana, India"},
    {id : 12 , eventDate : "Jul 20 2019 12:39AM" , eventName : "Attempt to View Insurance Verification Screen - Verify Insurance Benefits" , patientName : "--" , user : "Admin, System" , userType : "Admin" , publicIp : "172.68.167.25" , location : "Hyderabad, Telangana, India"},
    {id : 13 , eventDate : "Jul 20 2019 12:29AM" , eventName : "Attempt to Search Records in Insurance Verification Report Filter - Insurance Verification Report" , patientName : "--" , user : "Admin, System" , userType : "Admin" , publicIp : "172.68.167.25" , location : "Hyderabad, Telangana, India"},
    {id : 14 , eventDate : "Jul 20 2019 12:26AM" , eventName : "Attempt to View Insurance Verification Report - Insurance Verification Report" , patientName : "--" , user : "Admin, System" , userType : "Admin" , publicIp : "172.68.167.25" , location : "Hyderabad, Telangana, India"},  
    ]
}


deleteAttorney(){
//this.alertService.createAlert('Successfully deleted.', 1);
}

}
