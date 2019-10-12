import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { LogicNutrientComponent } from './logic-nutrient/logic-nutrient.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DictionaryService } from '../dictionary.service';
import { DeleteConfirmDailogComponent } from 'src/app/shared/delete-confirm-dailog/delete-confirm-dailog.component';

@Component({
  selector: 'app-nutrient',
  templateUrl: './nutrient.component.html',
  styleUrls: ['./nutrient.component.scss']
})
export class NutrientComponent implements OnInit {

  filterToggle:boolean;
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }
  
  fakedata: any;
  NutrientList: any;
  pageNutrientList: any;

  public pageSize = 10;
  public pageSizeTemp = this.pageSize;
  public currentPage = 0;
  public totalSize = 0;
  public currentPageTemp = 0;
  public totalSizeTemp = 0;

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  filterForm: FormGroup;

  constructor(private _fb: FormBuilder, public dialog: MatDialog, private alertService: AlertService,
    private dictionaryService: DictionaryService) {
      this.filterForm = this._fb.group({
        'keyWord': [null]
      });
     }

  ngOnInit() {
    this.fakedata= [
      {id:'1', Nutrient_Condition:'Choline',  Section:'Pregnancy & Lactation' },
      {id:'2', Nutrient_Condition:'Choline',  Section:'Risks of Metabolic imbalances' },
      {id:'3', Nutrient_Condition:'Choline',  Section:'Physical Activity' },
      {id:'4', Nutrient_Condition:'Choline',  Section:'Sports Performance'},
      {id:'5', Nutrient_Condition:'Choline',  Section:'Risks of Metabolic imbalances'},
      {id:'6', Nutrient_Condition:'Vitamin B', Section:'Sports Performance'},
      {id:'7', Nutrient_Condition:'Vitamin B', Section:'Nutrition'},
      {id:'8', Nutrient_Condition:'Vitamin B', Section:'Risks of Metabolic imbalances'},
      {id:'9', Nutrient_Condition:'Vitamin B', Section:'Nutrition' },
    ];
    this.getNutrientList();
  }

  getNutrientList() {
    this.filterForm.reset();
    this.dictionaryService.getnutrients_conditionslist().subscribe(
      data => {
        console.log(data)
        this.NutrientList = data['Nutrients_CondtionsList'];
        if (this.NutrientList.length >= 0) {
          this.pageNutrientList = this.NutrientList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
        }
        this.totalSize = this.NutrientList.length;
      }
    );
    // this.NutrientList = this.fakedata;
    // if (this.NutrientList.length >= 0) {
    //   this.pageNutrientList = this.NutrientList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    // }
    // this.totalSize = this.NutrientList.length;
  }

  public openLogicDialog(id, action, item) {
    let dialogRef = this.dialog.open(LogicNutrientComponent, {
      height: 'auto',
      width: '600px',
      autoFocus: false,
    });
    (<LogicNutrientComponent>dialogRef.componentInstance).id = id;
    (<LogicNutrientComponent>dialogRef.componentInstance).action = action;
    (<LogicNutrientComponent>dialogRef.componentInstance).item = item;
    dialogRef.afterClosed().subscribe(data => {
      this.getNutrientList();
    });
  }

  deleteNutrient(data) {
    let body = {
      'Nutrients_ConditionsId': data
    }
    this.dictionaryService.deletenutrients_conditions(body).subscribe(
      data => {
        console.log(data)
        if (data['Success'] == true) {
          this.getNutrientList();
          this.alertService.createAlert('Successfully Deleted', 1);
        } else {
          this.alertService.createAlert('Something Went Wrong', 0);
        }

      }
    );
  }

  filterBy(formValues) {
    console.log(formValues, 'filter values')
    console.log(formValues.keyWord, 'formValues.keyWord')

    let events = this.NutrientList;
    if (events != null) {
      let filteredEvents = events.filter(x =>
        (formValues.keyWord == null || JSON.stringify(x).toLowerCase().includes(formValues.keyWord.toLowerCase()))
      );
      console.log(filteredEvents, 'filteredEventssadA')

      this.NutrientList = filteredEvents;
      this.pageNutrientList = this.NutrientList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
      this.totalSize = filteredEvents.length;
      this.handlePage({ pageIndex: 0, pageSize: this.pageSize });
      this.currentPage = 0;
    }

  }

  resetFilter() {
    this.currentPage = 0;
    this.pageSize = 10;
    this.getNutrientList();
    this.filterForm.reset();
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.pageNutrientList = this.NutrientList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

  public handlePageTemp(e: any) {
    this.currentPageTemp = e.pageIndex;
    console.log('pageSize', e.pageSize)
    this.pageSize = e.pageSize;
    this.pageNutrientList = this.NutrientList.slice(this.currentPageTemp * this.pageSize, (this.currentPageTemp * this.pageSize) + this.pageSize);
  }

  public deleteDialog(id){
    let dialogRef = this.dialog.open(DeleteConfirmDailogComponent, {
      height: 'auto',
      width: '500px',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(data => {
      console.log("datr",data)
      if (data == true){
        this.deleteNutrient(id)
      }
    });
  }

}
