import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PersonalComponent } from './Personal/Personal.component';

@Component({
  selector: 'app-Dictionary',
  templateUrl: './Dictionary.component.html',
  styleUrls: ['./Dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {

  dictionaryCreatePermission: any;
  scopeCreatePermission: any;
  driCreatePermission: any;
  messagesCreatePermission: any;
  sectionsCreatePermission: any;
  nutrientConditionPermission: any;
  seqResultCreatePermission: any;
  persnalDataCreatePermission: any;
  testsCreatePermission: any;

  constructor(public dialog: MatDialog) {
  }
  ngOnInit() {
    let getPermissions = JSON.parse(localStorage.getItem('Permissions'));
    // console.log('Permissions: ', getPermissions);

    if (getPermissions) {
      for (let i = 0; i < getPermissions.length; i++) {
        let ScreenName = getPermissions[i]['ScreenName']
        if (ScreenName == 'Dictionary') {
          this.dictionaryCreatePermission = getPermissions[i]['Read']
        }
      }
      for (let i = 0; i < getPermissions.length; i++) {
        let ScreenName = getPermissions[i]['ScreenName']
        if (ScreenName == 'Scope') {
          this.scopeCreatePermission = getPermissions[i]['Read']
        }
      }
      for (let i = 0; i < getPermissions.length; i++) {
        let ScreenName = getPermissions[i]['ScreenName']
        if (ScreenName == 'DRI') {
          this.driCreatePermission = getPermissions[i]['Read']
        }
      }
      for (let i = 0; i < getPermissions.length; i++) {
        let ScreenName = getPermissions[i]['ScreenName']
        if (ScreenName == 'Messages') {
          this.messagesCreatePermission = getPermissions[i]['Read']
        }
      }
      for (let i = 0; i < getPermissions.length; i++) {
        let ScreenName = getPermissions[i]['ScreenName']
        if (ScreenName == 'Sections') {
          this.sectionsCreatePermission = getPermissions[i]['Read']
        }
      }
      for (let i = 0; i < getPermissions.length; i++) {
        let ScreenName = getPermissions[i]['ScreenName']
        if (ScreenName == 'Nurtients/Condition') {
          this.nutrientConditionPermission = getPermissions[i]['Read']
        }
      }
      for (let i = 0; i < getPermissions.length; i++) {
        let ScreenName = getPermissions[i]['ScreenName']
        if (ScreenName == 'Sequency Results Master') {
          this.seqResultCreatePermission = getPermissions[i]['Read']
        }
      }
      for (let i = 0; i < getPermissions.length; i++) {
        let ScreenName = getPermissions[i]['ScreenName']
        if (ScreenName == 'Personal Data') {
          this.persnalDataCreatePermission = getPermissions[i]['Read']
        }
      }
      for (let i = 0; i < getPermissions.length; i++) {
        let ScreenName = getPermissions[i]['ScreenName']
        if (ScreenName == 'Tests') {
          this.testsCreatePermission = getPermissions[i]['Read']
        }
      }
    }
    console.log(this.scopeCreatePermission, 'scopeCreatePermission');
    console.log(this.driCreatePermission, 'driCreatePermission');
    console.log(this.messagesCreatePermission, 'messagesCreatePermission');
    console.log(this.sectionsCreatePermission, 'sectionsCreatePermission');
    console.log(this.nutrientConditionPermission, 'nutrientConditionPermission');
    console.log(this.seqResultCreatePermission, 'seqResultCreatePermission');
    console.log(this.persnalDataCreatePermission, 'persnalDataCreatePermission');
    console.log(this.testsCreatePermission, 'testsCreatePermission');
  }

  public patientDataDialog() {
    let dialogRef = this.dialog.open(PersonalComponent, {
      height: 'auto',
      width: '500px',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

}
