import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PasswordDialogComponent } from './password-dialog/password-dialog.component';
import { ProfileDialogComponent } from './profile-dialog/profile-dialog.component';
import { MatDialog } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers:[AlertService]
})
export class UserMenuComponent implements OnInit {
  public userImage = '../assets/img/users/navin_malik.png';
  constructor(public dialog: MatDialog,public alertService:AlertService) { }
  public openUserDialog(id) {
    let dialogRef = this.dialog.open(PasswordDialogComponent, {
        data: id,
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}
public openUserDialogs(id) {
  let dialogRef = this.dialog.open(ProfileDialogComponent, {
      data: id,
      height: 'auto',
      width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}
  ngOnInit() {
  }

  logoutUser() {
    this.alertService.createAlert("Logged out Successfully",1);
  }

}
