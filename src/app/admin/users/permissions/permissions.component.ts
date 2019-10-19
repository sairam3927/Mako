import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
=======
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
=======
>>>>>>> 6e95d525468b7e1898a2dc0e47e03741e2389243
>>>>>>> b22beae318a2a66973e399a965100f96cc3c3668
import { Location } from '@angular/common';
import { AlertService } from '../../../shared/services/alert.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss'],
  providers: [AlertService]
})
export class PermissionsComponent implements OnInit {
  tableList: any;
<<<<<<< HEAD
  id: any;
  constructor(private location: Location, public usersService: UsersService, private route: ActivatedRoute, private alertService: AlertService) { }

  ngOnInit() {

    let UserId = this.route.snapshot.paramMap.get('id');
    this.id = decodeURIComponent(decodeURIComponent(UserId))
    console.log("id", this.id);
=======
<<<<<<< HEAD
  id: any;
  constructor(private location: Location, public usersService: UsersService, private route: ActivatedRoute, private alertService: AlertService) { }

  ngOnInit() {

    let UserId = this.route.snapshot.paramMap.get('id');
    this.id = decodeURIComponent(decodeURIComponent(UserId))
    console.log("id", this.id);
=======
  constructor(private location: Location, public usersService: UsersService, private alertService: AlertService) { }

  ngOnInit() {
    this.tableList = [
      { "ScreenName": "Dashboard", "Create": true, "Read": true, "Update": true, "Delete": true },
      { "ScreenName": "Orders", "Create": true, "Read": true, "Update": true, "Delete": true },
      { "ScreenName": "Raw Data", "Create": true, "Read": true, "Update": true, "Delete": true },
      { "ScreenName": "Set Up", "Create": true, "Read": true, "Update": true, "Delete": true },
      { "ScreenName": "Dictionary", "Create": true, "Read": true, "Update": true, "Delete": true },
      { "ScreenName": "Scope", "Create": true, "Read": true, "Update": true, "Delete": true },
      { "ScreenName": "DRI", "Create": true, "Read": true, "Update": true, "Delete": true },
      { "ScreenName": "Messages", "Create": true, "Read": true, "Update": true, "Delete": true },
      { "ScreenName": "Nutrients", "Create": true, "Read": true, "Update": true, "Delete": true },
      { "ScreenName": "SEQ Results", "Create": true, "Read": true, "Update": true, "Delete": true },
      { "ScreenName": "Haplotype", "Create": true, "Read": true, "Update": true, "Delete": true },
      { "ScreenName": "Tests", "Create": true, "Read": true, "Update": true, "Delete": true },
      { "ScreenName": "Calculations", "Create": true, "Read": true, "Update": true, "Delete": true },
      { "ScreenName": "Simulation", "Create": true, "Read": true, "Update": true, "Delete": true },
      { "ScreenName": "Pregnancy / Lactation", "Create": true, "Read": true, "Update": true, "Delete": true },
      { "ScreenName": "Adult Nutrition", "Create": true, "Read": true, "Update": true, "Delete": true },
      { "ScreenName": "Report Variables", "Create": true, "Read": true, "Update": true, "Delete": true },
      { "ScreenName": "Final Output Variables List ", "Create": true, "Read": true, "Update": true, "Delete": true },
      { "ScreenName": "Detailed Report", "Create": true, "Read": true, "Update": true, "Delete": true },
      { "ScreenName": "Summary Report", "Create": true, "Read": true, "Update": true, "Delete": true },
      { "ScreenName": "Admin", "Create": true, "Read": true, "Update": true, "Delete": true },
      { "ScreenName": "Users", "Create": true, "Read": true, "Update": true, "Delete": true },
      { "ScreenName": "Permissions", "Create": true, "Read": true, "Update": true, "Delete": true },
      { "ScreenName": "Settings", "Create": true, "Read": true, "Update": true, "Delete": true }
    ];
>>>>>>> 6e95d525468b7e1898a2dc0e47e03741e2389243
>>>>>>> b22beae318a2a66973e399a965100f96cc3c3668
    this.getPermissions();
  }

  getPermissions() {
    this.tableList = null;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b22beae318a2a66973e399a965100f96cc3c3668
    let body = {
      "UserId": this.id
    }
    this.usersService.getuserpermissions(body).subscribe(
<<<<<<< HEAD
=======
      data => {
        console.log(data);
        this.tableList = data['Permissions'];
        for (let i = 0; i < this.tableList.length; i++) {
          this.tableList[i].UserId = this.id
        }
      }
    )
  }

  change(index, name, value) {
    this.tableList[index][name] = value;
  }

=======
    this.usersService.getuserpermissions().subscribe(
>>>>>>> b22beae318a2a66973e399a965100f96cc3c3668
      data => {
        console.log(data);
        this.tableList = data['Permissions'];
        for (let i = 0; i < this.tableList.length; i++) {
          this.tableList[i].UserId = this.id
        }
      }
    )
  }

  change(index, name, value) {
    this.tableList[index][name] = value;
  }

>>>>>>> 6e95d525468b7e1898a2dc0e47e03741e2389243
  saveUserPermissions() {
    let body = {
      "Permissions": this.tableList
    }
<<<<<<< HEAD
    console.log("body", body);
=======
<<<<<<< HEAD
    console.log("body", body);
    this.usersService.saveuserpermissions(body).subscribe(
      data => {
        console.log(data)
        
        if (data['Success'] == true) {
          this.alertService.createAlert(data['Message'], 1);
          this.getPermissions();
=======
>>>>>>> b22beae318a2a66973e399a965100f96cc3c3668
    this.usersService.saveuserpermissions(body).subscribe(
      data => {
        console.log(data)
        
        if (data['Success'] == true) {
          this.alertService.createAlert(data['Message'], 1);
<<<<<<< HEAD
          this.getPermissions();
=======
>>>>>>> 6e95d525468b7e1898a2dc0e47e03741e2389243
>>>>>>> b22beae318a2a66973e399a965100f96cc3c3668
        } else {
          this.alertService.createAlert(data['Message'], 0);
        }
      }
    )
  }

  goBack() {
    this.location.back();
  }

}