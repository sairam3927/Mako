import { Component, OnInit } from '@angular/core';
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
    this.getPermissions();
  }

  getPermissions() {
    this.tableList = null;
    this.usersService.getuserpermissions().subscribe(
      data => {
        this.tableList = data['Permissions'];
      }
    )
  }

  change(index, name, value) {
    console.log(this.tableList)
    this.tableList[index][name] = value;
    // console.log(this.tableList[index][name],"this.tableList[index][name]")
    console.log(this.tableList, "changed")
  }

  saveUserPermissions() {
    let body = {
      "Permissions": this.tableList
    }
    this.usersService.saveuserpermissions(body).subscribe(
      data => {
        if (data['Success'] == true) {
          this.alertService.createAlert(data['Message'], 1);
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