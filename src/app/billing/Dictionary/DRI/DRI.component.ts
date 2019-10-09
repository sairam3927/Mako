import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddDRIComponent } from './addDRI/addDRI.component';
import { AlertService } from 'src/app/shared/services/alert.service';
import { PersonalComponent } from '../Personal/Personal.component';
import { DriUploadCSVComponent } from './dri-upload-csv/dri-upload-csv.component';
import { DictionaryService } from '../dictionary.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-DRI',
  templateUrl: './DRI.component.html',
  styleUrls: ['./DRI.component.scss']
})
export class DRIComponent implements OnInit {
  filterToggle: boolean;
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }
  fakedata: any;
  DRIList: any;
  pageDRIList: any;

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
    this.fakedata = [
      { id: "1", Used: "checked", Nutrition: "Apa", Pregnant_G_30: "3", Pregnant_L_30: "3", Lactate_G_30: "3,8", Lactate_L_30: "3,8", Female_L_50: "2,7", Female_G_50: "2,7", Male_L_50: "3,7", Male_G_50: "3,7" },
      { id: "2", Used: "", Nutrition: "Carbohydrates", Pregnant_G_30: "175", Pregnant_L_30: "175", Lactate_G_30: "210", Lactate_L_30: "210", Female_L_50: "130", Female_G_50: "130", Male_L_50: "130", Male_G_50: "130" },
      { id: "3", Used: "", Nutrition: "Fiber", Pregnant_G_30: "28", Pregnant_L_30: "28", Lactate_G_30: "29", Lactate_L_30: "29", Female_L_50: "25", Female_G_50: "21", Male_L_50: "38", Male_G_50: "30" },
      { id: "4", Used: "", Nutrition: "linolenicAcid", Pregnant_G_30: "13", Pregnant_L_30: "13", Lactate_G_30: "13", Lactate_L_30: "13", Female_L_50: "12", Female_G_50: "11", Male_L_50: "17", Male_G_50: "14" },
      { id: "5", Used: "checked", Nutrition: "α-LinolenicAcid", Pregnant_G_30: "1,4", Pregnant_L_30: "1,4", Lactate_G_30: "1,3", Lactate_L_30: "1,3", Female_L_50: "1,1", Female_G_50: "1,1", Male_L_50: "1,6", Male_G_50: "1,6" },
      { id: "6", Used: "", Nutrition: "Protein", Pregnant_G_30: "71", Pregnant_L_30: "71", Lactate_G_30: "71", Lactate_L_30: "71", Female_L_50: "46", Female_G_50: "46", Male_L_50: "56", Male_G_50: "56" },
      { id: "7", Used: "", Nutrition: "Vitamin-A", Pregnant_G_30: "770", Pregnant_L_30: "770", Lactate_G_30: "1300", Lactate_L_30: "1300", Female_L_50: "700", Female_G_50: "700", Male_L_50: "900", Male_G_50: "900" },
      { id: "8", Used: "", Nutrition: "Vitamin-C", Pregnant_G_30: "85", Pregnant_L_30: "85", Lactate_G_30: "120", Lactate_L_30: "120", Female_L_50: "75", Female_G_50: "75", Male_L_50: "90", Male_G_50: "90" },
      { id: "8", Used: "checked", Nutrition: "Vitamin-D", Pregnant_G_30: "15", Pregnant_L_30: "15", Lactate_G_30: "15", Lactate_L_30: "15", Female_L_50: "15", Female_G_50: "15", Male_L_50: "15", Male_G_50: "15" },
      { id: "8", Used: "", Nutrition: "Vitamin-E", Pregnant_G_30: "15", Pregnant_L_30: "15", Lactate_G_30: "19", Lactate_L_30: "19", Female_L_50: "15", Female_G_50: "15", Male_L_50: "15", Male_G_50: "15" },
      { id: "8", Used: "", Nutrition: "Vitamin-K", Pregnant_G_30: "90", Pregnant_L_30: "90", Lactate_G_30: "90", Lactate_L_30: "90", Female_L_50: "90", Female_G_50: "90", Male_L_50: "120", Male_G_50: "120" },
      { id: "8", Used: "", Nutrition: "Tiamina", Pregnant_G_30: "1,4", Pregnant_L_30: "1,4", Lactate_G_30: "1,4", Lactate_L_30: "1,4", Female_L_50: "1,1", Female_G_50: "1,1", Male_L_50: "1,2", Male_G_50: "1,2" },
      { id: "8", Used: "", Nutrition: "Riboflavina", Pregnant_G_30: "1,4", Pregnant_L_30: "1,4", Lactate_G_30: "1,6", Lactate_L_30: "1,6", Female_L_50: "1,1", Female_G_50: "1,1", Male_L_50: "1,3", Male_G_50: "1,3" },
      { id: "8", Used: "checked", Nutrition: "Niacina", Pregnant_G_30: "18", Pregnant_L_30: "18", Lactate_G_30: "17", Lactate_L_30: "17", Female_L_50: "14", Female_G_50: "14", Male_L_50: "16", Male_G_50: "16" },
      { id: "8", Used: "", Nutrition: "Vitamina B6", Pregnant_G_30: "1,9", Pregnant_L_30: "1,9", Lactate_G_30: "2", Lactate_L_30: "2", Female_L_50: "1,3", Female_G_50: "1,5", Male_L_50: "1,3", Male_G_50: "1,7" },
      { id: "8", Used: "", Nutrition: "Vitamina B12", Pregnant_G_30: "2,6", Pregnant_L_30: "2,6", Lactate_G_30: "2,8", Lactate_L_30: "2,8", Female_L_50: "2,4", Female_G_50: "2,4", Male_L_50: "2,4", Male_G_50: "2,4" },
      { id: "8", Used: "", Nutrition: "Acid Pantotenic", Pregnant_G_30: "6", Pregnant_L_30: "6", Lactate_G_30: "7", Lactate_L_30: "7", Female_L_50: "5", Female_G_50: "5", Male_L_50: "5", Male_G_50: "5" },
      { id: "8", Used: "checked", Nutrition: "Betaina", Pregnant_G_30: "-", Pregnant_L_30: "-", Lactate_G_30: "-", Lactate_L_30: "-", Female_L_50: "-", Female_G_50: "-", Male_L_50: "-", Male_G_50: "-" },
      { id: "8", Used: "", Nutrition: "Biotina", Pregnant_G_30: "30", Pregnant_L_30: "30", Lactate_G_30: "35", Lactate_L_30: "35", Female_L_50: "30", Female_G_50: "30", Male_L_50: "30", Male_G_50: "30" },
      { id: "8", Used: "", Nutrition: "Colina", Pregnant_G_30: "450", Pregnant_L_30: "450", Lactate_G_30: "550", Lactate_L_30: "550", Female_L_50: "425", Female_G_50: "425", Male_L_50: "550", Male_G_50: "550" },
      { id: "8", Used: "", Nutrition: "Calciu", Pregnant_G_30: "1000", Pregnant_L_30: "1000", Lactate_G_30: "1000", Lactate_L_30: "1000", Female_L_50: "1000", Female_G_50: "1200", Male_L_50: "1000", Male_G_50: "1000" },
      { id: "8", Used: "", Nutrition: "Crom", Pregnant_G_30: "30", Pregnant_L_30: "30", Lactate_G_30: "45", Lactate_L_30: "45", Female_L_50: "25", Female_G_50: "20", Male_L_50: "35", Male_G_50: "30" },
      { id: "8", Used: "", Nutrition: "Cupru", Pregnant_G_30: "1000", Pregnant_L_30: "1000", Lactate_G_30: "1300", Lactate_L_30: "1300", Female_L_50: "900", Female_G_50: "900", Male_L_50: "900", Male_G_50: "900" },
      { id: "8", Used: "", Nutrition: "Fier", Pregnant_G_30: "27", Pregnant_L_30: "27", Lactate_G_30: "9", Lactate_L_30: "9", Female_L_50: "18", Female_G_50: "8", Male_L_50: "8", Male_G_50: "8" },
      { id: "8", Used: "", Nutrition: "Fluor", Pregnant_G_30: "3", Pregnant_L_30: "3", Lactate_G_30: "3", Lactate_L_30: "3", Female_L_50: "3", Female_G_50: "3", Male_L_50: "4", Male_G_50: "4" },
      { id: "8", Used: "", Nutrition: "Fosfor", Pregnant_G_30: "700", Pregnant_L_30: "700", Lactate_G_30: "700", Lactate_L_30: "700", Female_L_50: "700", Female_G_50: "700", Male_L_50: "700", Male_G_50: "700" },
      { id: "8", Used: "", Nutrition: "Iod", Pregnant_G_30: "220", Pregnant_L_30: "220", Lactate_G_30: "290", Lactate_L_30: "290", Female_L_50: "150", Female_G_50: "150", Male_L_50: "150", Male_G_50: "150" },
      { id: "8", Used: "checked", Nutrition: "Magneziu", Pregnant_G_30: "350", Pregnant_L_30: "360", Lactate_G_30: "310", Lactate_L_30: "320", Female_L_50: "320", Female_G_50: "320", Male_L_50: "420", Male_G_50: "420" },
      { id: "8", Used: "", Nutrition: "Mangan", Pregnant_G_30: "2", Pregnant_L_30: "2", Lactate_G_30: "2,6", Lactate_L_30: "2,6", Female_L_50: "1,8", Female_G_50: "1,8", Male_L_50: "2,3", Male_G_50: "2,3" },
      { id: "8", Used: "", Nutrition: "Molibden", Pregnant_G_30: "50", Pregnant_L_30: "50", Lactate_G_30: "50", Lactate_L_30: "50", Female_L_50: "45", Female_G_50: "45", Male_L_50: "45", Male_G_50: "45" },
      { id: "8", Used: "", Nutrition: "Seleniu", Pregnant_G_30: "60", Pregnant_L_30: "60", Lactate_G_30: "70", Lactate_L_30: "70", Female_L_50: "55", Female_G_50: "55", Male_L_50: "55", Male_G_50: "55" },
      { id: "8", Used: "", Nutrition: "Zinc", Pregnant_G_30: "11", Pregnant_L_30: "11", Lactate_G_30: "12", Lactate_L_30: "12", Female_L_50: "8", Female_G_50: "8", Male_L_50: "11", Male_G_50: "11" },
      { id: "8", Used: "checked", Nutrition: "Potasiu", Pregnant_G_30: "4,7", Pregnant_L_30: "4,7", Lactate_G_30: "5,1", Lactate_L_30: "5,1", Female_L_50: "4,7", Female_G_50: "4,7", Male_L_50: "4,7", Male_G_50: "4,7" },
      { id: "8", Used: "", Nutrition: "Sodiu", Pregnant_G_30: "1,5", Pregnant_L_30: "1,5", Lactate_G_30: "1,5", Lactate_L_30: "1,5", Female_L_50: "1,5", Female_G_50: "1,3", Male_L_50: "1,5", Male_G_50: "1,3" },
      { id: "8", Used: "", Nutrition: "Clor", Pregnant_G_30: "2,3", Pregnant_L_30: "2,3", Lactate_G_30: "2,3", Lactate_L_30: "2,3", Female_L_50: "2,3", Female_G_50: "2", Male_L_50: "2,3", Male_G_50: "2" },
    ];
    this.getPhysicianList()
  }

  getPhysicianList() {
    this.filterForm.reset();
    this.dictionaryService.DRIgetsectionslist().subscribe(
      data => {
        console.log(data) 
        this.DRIList = data['DriList'];
        if (this.DRIList.length >= 0) {
          this.pageDRIList = this.DRIList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
        }
        this.totalSize = this.DRIList.length;
      }
    );
    // this.DRIList = this.fakedata;
    // if (this.DRIList.length >= 0) {
    //   this.pageDRIList = this.DRIList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    // }
    // this.totalSize = this.DRIList.length;
  }

  public addDriDialog(id, action, item) {
    let dialogRef = this.dialog.open(AddDRIComponent, {
      height: 'auto',
      width: '600px',
      autoFocus: false,

    });
    (<AddDRIComponent>dialogRef.componentInstance).id = id;
    (<AddDRIComponent>dialogRef.componentInstance).action = action;
    (<AddDRIComponent>dialogRef.componentInstance).item = item;
    dialogRef.afterClosed().subscribe(data => {
      this.getPhysicianList() 
    });
  }

  public patientDataDialog() {
    let dialogRef = this.dialog.open(PersonalComponent, {
      height: 'auto',
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public UploadCSVDialog() {
    let dialogRef = this.dialog.open(DriUploadCSVComponent, {
      height: 'auto',
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }


  deleteDRI(data) {
    let body = {
      'DRIid': data
    }
    this.dictionaryService.DRIdeletesection(body).subscribe(
      data => {
        console.log(data)
        if (data['Success'] == true) {
          this.getPhysicianList();
          this.alertService.createAlert('Successfully Deleted', 1);
        } else {
          this.alertService.createAlert('Something Went Wrong', 0);
        }

      }
    );
  }

  filterBy(formValues) {
    // this.getVoucherList();
    console.log(formValues, 'filter values')
    console.log(formValues.keyWord, 'formValues.keyWord')

    let events = this.DRIList;
    if (events != null) {
      let filteredEvents = events.filter(x =>
        (formValues.keyWord == null || JSON.stringify(x).toLowerCase().includes(formValues.keyWord.toLowerCase()))
      );
      console.log(filteredEvents, 'filteredEventssadA')

      this.DRIList = filteredEvents;
      this.pageDRIList = this.DRIList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
      this.totalSize = filteredEvents.length;
      this.handlePage({ pageIndex: 0, pageSize: this.pageSize });
      this.currentPage = 0;
    }

  }

  resetFilter() {
    this.currentPage = 0;
    this.pageSize = 10;
    this.getPhysicianList();
    this.filterForm.reset();
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.pageDRIList = this.DRIList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

  public handlePageTemp(e: any) {
    this.currentPageTemp = e.pageIndex;
    console.log('pageSize', e.pageSize)
    this.pageSize = e.pageSize;
    this.pageDRIList = this.DRIList.slice(this.currentPageTemp * this.pageSize, (this.currentPageTemp * this.pageSize) + this.pageSize);
  }

}
