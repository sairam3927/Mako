import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddTestComponent } from './add-test/add-test.component';
import { UploadTestComponent } from './upload-test/upload-test.component';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {
  filterToggle:boolean;
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }
  List: any;
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  

  constructor(public dialog: MatDialog,
    private alertService: AlertService) {
    }
  ngOnInit() {
    this.List = [
      {id: "1" , TestName:"Congenital lactase deficiency",Used:"checked",Gene:"LCT",Genotype:"A/A",Nutrient:' Vitamin A', Para1:'This genotype is normal.', Para2:'In the absence of other causes, the newborn can consume breast milk / formula containing lactose.', Logic:'', Value:'' },
      {id: "2" , TestName:"Congenital lactase deficiency",Used:"", Gene:"LCT",Genotype:"T/T", Nutrient:'Choline', Para1:'This genotype associates with congenital lactase deficiency. You will definitely transmit a copy of the mutation to your child.', Para2:'It may be necessary to test the other parent or the fetus / newborn.', Logic:'', Value:'' },
      {id: "3" , TestName:"THIAMINE (VITAMIN B1)",Used:"checked", Gene:"LCT",Genotype:"A/T",Nutrient:'Vitamin B', Para1:'Having this genotype, you can transmit a copy of the mutation to your child, with 50% chances.', Para2:'It may be necessary to test the other parent or the fetus / newborn.', Logic:'', Value:'' },
      {id: "4" , TestName:"THIAMINE (VITAMIN B1)",Used:"" ,Gene:"LCT",Genotype:"A/A", Nutrient:'Vitamin K', Para1:'This genotype is normal.', Para2:'In the absence of other causes, the newborn can consume breast milk / formula containing lactose..', Logic:'', Value:'' },
      {id: "5" , TestName:"Congenital lactase deficiency",Used:"", Gene:"LCT",Genotype:"T/T", Nutrient:'Vitamin D', Para1:'Having this genotype, you can transmit a copy of the mutation to your child, with 50% chances.', Para2:'It may be necessary to test the other parent or the fetus / newborn.', Logic:'', Value:'' },
      {id: "6" , TestName:"THIAMINE (VITAMIN B1)",Used:"checked", Gene:"LCT",Genotype:"A/T", Nutrient:'protein', Para1:'This genotype associates with congenital lactase deficiency. You will definitely transmit a copy of the mutation to your child.', Para2:'It may be necessary to test the other parent or the fetus / newborn.', Logic:'', Value:'' },
      {id: "7" , TestName:"THIAMINE (VITAMIN B1)",Used:"checked", Gene:"LCT",Genotype:"A/A", Nutrient:'Vitamin D', Para1:'This genotype is normal.', Para2:'It may be necessary to test the other parent or the fetus / newborn.', Logic:'', Value:'' }
    ];
  }

  public patientDataDialog() {
    let dialogRef = this.dialog.open(AddTestComponent, {
      height: 'auto',
      width: '500px',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public addtestDialog() {
    let dialogRef = this.dialog.open(AddTestComponent, {
      height: 'auto',
      width: '500px',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  deletePatientOrder(){
    this.alertService.createAlert('Successfully deleted.', 1);       
  }
  public uploadCSVTestDialog() {
    let dialogRef = this.dialog.open(UploadTestComponent, {
      height: 'auto',
      width: '400px',
      autoFocus: false,
      
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  
}
