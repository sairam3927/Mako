import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-Calculations',
  templateUrl: './Calculations.component.html',
  styleUrls: ['./Calculations.component.scss']
})
export class CalculationsComponent implements OnInit {

  constructor(public dialog: MatDialog,private alertService : AlertService) {
    }
  ngOnInit() {
   
  }

}
