import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  id: any;
  constructor(private location: Location, public usersService: UsersService, private route: ActivatedRoute, private alertService: AlertService) { }

  ngOnInit() {
    let UserId = this.route.snapshot.paramMap.get('id');
    this.id = decodeURIComponent(decodeURIComponent(UserId))
    console.log("id", this.id);
    this.getPermissions();
  }
  getPermissions() {
    let body = {
      "UserId": this.id
    }
    this.usersService.getuserpermissions(body).subscribe(
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

  saveUserPermissions() {
    let body = {
      "Permissions": this.tableList
    }
    console.log("body", body);
    this.usersService.saveuserpermissions(body).subscribe(
      data => {
        console.log(data)
        
        if (data['Success'] == true) {
          this.alertService.createAlert(data['Message'], 1);
          this.getPermissions();
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