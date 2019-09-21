import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PersonalComponent } from './Personal/Personal.component';

@Component({
  selector: 'app-Dictionary',
  templateUrl: './Dictionary.component.html',
  styleUrls: ['./Dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {

  imagePath = '../../../../assets/img/vendor/leaflet/page_under_construction.png';  
  
  constructor(public dialog: MatDialog) {
    }
  ngOnInit() {
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
