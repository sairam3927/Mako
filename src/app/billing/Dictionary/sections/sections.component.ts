import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from 'src/app/app.settings';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { DictionaryService } from '../dictionary.service';
import { AddSectionComponent } from './add-section/add-section.component';
import { DeleteConfirmDailogComponent } from 'src/app/shared/delete-confirm-dailog/delete-confirm-dailog.component';

@Component({ 
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  filterToggle: boolean;
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }
  fakedata: any;
  SectionList: any;
  pageSectionList: any; 

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
      { id: '1', SectionName: "Pregnancy & Lacatation", SectionDescription: "This genetic testing package identifies your nutritional needs during pregnancy or breast-feeding. Because the structure of your genes contributes to defining these needs, your results define the personalized nutritional needs just for you, and cannot be considered appropriate for any another person. These personalized recommendations are for you only.", Recommendation: '' },
      { id: '2', SectionName: "Adult Nutrition", SectionDescription: "This package identifies the nutrient targets you need as adult. Because your DNA structure contributes to defining these targets, these results define the personalized nutritional needs just for you, and cannot be considered appropriate for another person.", Recommendation: '' },
      { id: '3', SectionName: "Metabolism", SectionDescription: "This package aims to identify the link between your genetic structure and the impact that physical activity can have on your health. These genetic tests identify personalized solutions for you that cannot be considered appropriate for another person.", Recommendation: '' },
      { id: '4', SectionName: "Physical Activity & SPorts Performance", SectionDescription: "This package is meant to inform you about certain genetic variations that may be known to be associated with the occurrence of certain diseases. The results of this package cannot be considered as diagnostic tests.", Recommendation: '' },
      { id: '5', SectionName: "Others", SectionDescription: "This package aims to identify the link between your genetic structure and the impact that physical activity can have on your health. These genetic tests identify personalized solutions for you that cannot be considered appropriate for another person.", Recommendation: '' }
    ];
    this.getSectionList();
  }

  getSectionList() {
    this.filterForm.reset();
    this.dictionaryService.Sectionsgetlist().subscribe(
      data => {
        console.log(data)
        this.SectionList = data['SectionsList'];
        if (this.SectionList.length >= 0) {
          this.pageSectionList = this.SectionList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
        }
        this.totalSize = this.SectionList.length;
      }
    );
    // this.SectionList = this.fakedata;
    // if (this.SectionList.length >= 0) {
    //   this.pageSectionList = this.SectionList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    // }
    // this.totalSize = this.SectionList.length;
  }

  public addSectionDialog(id, action, item) {
    let dialogRef = this.dialog.open(AddSectionComponent, {
      height: 'auto',
      width: '600px',
      autoFocus: false,

    });
    (<AddSectionComponent>dialogRef.componentInstance).id = id;
    (<AddSectionComponent>dialogRef.componentInstance).action = action;
    (<AddSectionComponent>dialogRef.componentInstance).item = item;
    dialogRef.afterClosed().subscribe(data => {
      this.getSectionList();
    });
  }

  deleteSection(data) {
    let body = {
      'SectionsId': data
    }
    this.dictionaryService.Sectionsdelete(body).subscribe(
      data => {
        console.log(data)
        if (data['Success'] == true) {
          this.getSectionList();
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

    let events = this.SectionList;
    if (events != null) {
      let filteredEvents = events.filter(x =>
        (formValues.keyWord == null || JSON.stringify(x).toLowerCase().includes(formValues.keyWord.toLowerCase()))
      );
      console.log(filteredEvents, 'filteredEventssadA')

      this.SectionList = filteredEvents;
      this.pageSectionList = this.SectionList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
      this.totalSize = filteredEvents.length;
      this.handlePage({ pageIndex: 0, pageSize: this.pageSize });
      this.currentPage = 0;
    }

  }

  resetFilter() {
    this.currentPage = 0;
    this.pageSize = 10;
    this.getSectionList();
    this.filterForm.reset();
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.pageSectionList = this.SectionList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

  public handlePageTemp(e: any) {
    this.currentPageTemp = e.pageIndex;
    console.log('pageSize', e.pageSize)
    this.pageSize = e.pageSize;
    this.pageSectionList = this.SectionList.slice(this.currentPageTemp * this.pageSize, (this.currentPageTemp * this.pageSize) + this.pageSize);
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
        this.deleteSection(id)
      }
    });
  }
 


}
