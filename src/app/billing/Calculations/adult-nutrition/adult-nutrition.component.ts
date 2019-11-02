import { Component, OnInit } from '@angular/core';
import { LogicAdultnutritionComponent } from './logic-adultnutrition/logic-adultnutrition.component';
import { AppSettings } from 'src/app/app.settings';
import { MatDialog } from '@angular/material';
import { RestrictionComponent } from 'src/app/shared/restriction/restriction.component';
import { CalculationsService } from '../calculations.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-adult-nutrition',
  templateUrl: './adult-nutrition.component.html',
  styleUrls: ['./adult-nutrition.component.scss']
})
export class AdultNutritionComponent implements OnInit {

  CreatePermission: any;
  ReadPermission: any;
  UpdatePermission: any;
  DeletePermission: any;

  List: any;
  AdultNutritionList: any;
  pageAdultNutritionList: any;

  public pageSize = 10;
  public pageSizeTemp = this.pageSize;
  public currentPage = 0;
  public totalSize = 0;
  public currentPageTemp = 0;
  public totalSizeTemp = 0;
  filterForm: FormGroup;

  constructor(public appSettings: AppSettings, private _fb: FormBuilder,
    public dialog: MatDialog, public calculationsService: CalculationsService) {
    this.filterForm = this._fb.group({
      'keyWord': [null]
    });
  }

  ngOnInit() {

    let getPermissions = JSON.parse(localStorage.getItem('Permissions'));
    // console.log('Permissions: ', getPermissions);

    if (getPermissions) {
      for (let i = 0; i < getPermissions.length; i++) {
        let ScreenName = getPermissions[i]['ScreenName']
        if (ScreenName == 'Adult Nutrition Table') {
          this.CreatePermission = getPermissions[i]['Create']
          this.ReadPermission = getPermissions[i]['Read']
          this.UpdatePermission = getPermissions[i]['Update']
          this.DeletePermission = getPermissions[i]['Delete']
        }
      }
    }
    // console.log(this.CreatePermission, 'CreatePermission');
    // console.log(this.ReadPermission, 'ReadPermission');
    // console.log(this.UpdatePermission, 'UpdatePermission');
    // console.log(this.DeletePermission, 'DeletePermission');

    this.getAdultNutritionList();
  }

  getAdultNutritionList() {
    // this.filterForm.reset();
    this.calculationsService.getantable().subscribe(
      data => {
        console.log(data, 'getAdultNutritionList')
        this.AdultNutritionList = data['ANTable'];
        if (this.AdultNutritionList != null && this.AdultNutritionList.length >= 0) {
          this.pageAdultNutritionList = this.AdultNutritionList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
        }
        this.totalSize = this.AdultNutritionList != null ? this.AdultNutritionList.length : 0;
      }
    );
  }

  public openLogicDialog() {
    let dialogRef = this.dialog.open(LogicAdultnutritionComponent, {
      height: 'auto',
      width: '600px',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public restrictionDialog(action) {
    let dialogRef = this.dialog.open(RestrictionComponent, {
      height: 'auto',
      width: '500px',
      autoFocus: false,
    });
    (<RestrictionComponent>dialogRef.componentInstance).action = action;
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  filterBy(formValues) {
    console.log(formValues, 'filter values')
    console.log(formValues.keyWord, 'formValues.keyWord')

    let events = this.AdultNutritionList;
    if (events != null) {
      let filteredEvents = events.filter(x =>
        (formValues.keyWord == null || JSON.stringify(x).toLowerCase().includes(formValues.keyWord.toLowerCase()))
      );
      console.log(filteredEvents, 'filteredEventssadA')

      this.AdultNutritionList = filteredEvents;
      this.pageAdultNutritionList = this.AdultNutritionList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
      this.totalSize = filteredEvents.length;
      this.handlePage({ pageIndex: 0, pageSize: this.pageSize });
      this.currentPage = 0;
    }

  }

  resetFilter() {
    this.currentPage = 0;
    this.pageSize = 10;
    this.getAdultNutritionList();
    this.filterForm.reset();
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.pageAdultNutritionList = this.AdultNutritionList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

  public handlePageTemp(e: any) {
    this.currentPageTemp = e.pageIndex;
    console.log('pageSize', e.pageSize)
    this.pageSize = e.pageSize;
    this.pageAdultNutritionList = this.AdultNutritionList.slice(this.currentPageTemp * this.pageSize, (this.currentPageTemp * this.pageSize) + this.pageSize);
  }

}
