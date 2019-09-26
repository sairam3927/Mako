import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddTestComponent } from './add-test/add-test.component';
import { UploadTestComponent } from './upload-test/upload-test.component';
import { LogicTestsComponent } from './logic-tests/logic-tests.component';

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

      
      
      {id: "1" , TestName:"Test 1",Used:"checked",Gene:"LCT",Genotype:"A/A",Nutrient:'CONGENITAL LACTASE DEFICIENCY', Para1:'The LCT gene regulates the process of hydrolysis ("digestion") of lactose. A parent with a T genetic variation can transmit it to the child. If the newborn has two T genetic variations (genotype T/T)', Para2:'N/A', Logic:'TBD', Value:'NA' },
      {id: "2" , TestName:"Test 2",Used:"", Gene:"LCT",Genotype:"T/T", Nutrient:'THIAMINE (VITAMIN B1)', Para1:'he or she may develop congenital lactase deficiency.The TPK1 gene controls the conversion of thiamine to thiamine pyrophosphate. Mothers carrying the C genetic variation have an increased risk of giving birth to children weighing less than the average birth weight.', Para2:'Foods rich in Thiamine (Vitamin B1) include: beef, liver, powdered milk, nuts, oranges, pork, eggs, peas, dried beans, and yeast.', Logic:'TBD', Value:'NA' },
      {id: "3" , TestName:"Test 3",Used:"checked", Gene:"LCT",Genotype:"A/T",Nutrient:'ADENOSINE', Para1:'The ADA gene controls the metabolism of adenosine. Mothers carrying two copies of the gene with the genetic variation C (genotype C/C) have an increased risk of giving birth to children with neural tube closure defects, possibly due to accumulation of deoxyadenosine.', Para2:'NA', Logic:'TBD', Value:'>5' },
      {id: "4" , TestName:"Test 4",Used:"" ,Gene:"LCT",Genotype:"A/A", Nutrient:'VITAMIN A', Para1:'The PEMT gene controls for the endogenous synthesis of choline. Mothers carrying two copies of the gene containing the genetic variation C (genotype C/C) are at increased risk of giving birth to children with neural tube closure defects.', Para2:'Foods rich in (Vitamin A) include: Carrots, Spinach, Sweet Potato, Papaya, Mango.', Logic:'', Value:'>5' },
      {id: "5" , TestName:"Test 5",Used:"", Gene:"LCT",Genotype:"T/T", Nutrient:'CHOLINE', Para1:'The TPK1 gene controls the conversion of thiamine to thiamine pyrophosphate. Mothers carrying the C genetic variation have an increased risk of giving birth to children weighing less than the average birth weight.', Para2:'Foods rich in (CHOLINE) include: Eggs, liver, and peanuts, meat, poultry, fish, dairy foods, pasta, rice.', Logic:'TBD', Value:'NA' },
      {id: "6" , TestName:"Test 6",Used:"checked", Gene:"LCT",Genotype:"A/T", Nutrient:'protein', Para1:'The ADA gene controls the metabolism of adenosine. Mothers carrying two copies of the gene with the genetic variation C (genotype C/C) have an increased risk of giving birth to children with neural tube closure defects, possibly due to accumulation of deoxyadenosine.', Para2:'NA', Logic:'TBD', Value:'6' },
      {id: "7" , TestName:"Test 7",Used:"checked", Gene:"LCT",Genotype:"A/A", Nutrient:'Vitamin D', Para1:'The LCT gene regulates the process of hydrolysis ("digestion") of lactose. A parent with a T genetic variation can transmit it to the child. If the newborn has two T genetic variations (genotype T/T)', Para2:'Foods rich in (Vitamin D) include: nuts, eggs, peas, dried beans.', Logic:'TBD', Value:'NA' }
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
  // public openLogicDialog() {
  //   let dialogRef = this.dialog.open(LogicTestsComponent, {
  //     height: 'auto',
  //     width: '600px',
  //     autoFocus: false,
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //   });
  // }
  
}
