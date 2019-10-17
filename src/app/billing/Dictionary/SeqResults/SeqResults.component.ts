import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
// import { AlertService } from 'src/app/shared/services/alert.service';
import { UploadCSVComponent } from './uploadCSV/uploadCSV.component';
import { PersonalComponent } from '../Personal/Personal.component';
import { AddSeqResultComponent } from './add-seq-result/add-seq-result.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { DictionaryService } from '../dictionary.service';
import { DeleteConfirmDailogComponent } from 'src/app/shared/delete-confirm-dailog/delete-confirm-dailog.component';

@Component({
  selector: 'app-SeqResults',
  templateUrl: './SeqResults.component.html',
  styleUrls: ['./SeqResults.component.scss']
})
export class SeqResultsComponent implements OnInit {
  filterToggle: boolean;
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }
  fakedata: any;
  SeqResultList: any;
  pageSeqResultList: any;

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
      { id: "1", Used: "checked", AlleleName: "rs4846048", Ref: "G", Variant: "A", Gene: "LCT", Genotype: "G/A ", AlleleCall: "Heterozygous" },
      { id: "2", Used: "", AlleleName: "rs1537514", Ref: "G", Variant: "C", Gene: "ADA ", Genotype: "G/G", AlleleCall: "Absent" },
      { id: "3", Used: "checked", AlleleName: "rs868014", Ref: "A", Variant: "G", Gene: "TPK ", Genotype: "G/G", AlleleCall: "Homozygous" },
      { id: "4", Used: "", AlleleName: "rs2274976", Ref: "C", Variant: "T", Gene: "ADA ", Genotype: "G/C", AlleleCall: "Absent" },
      { id: "5", Used: "checked", AlleleName: "tvc.novel.1", Ref: "G", Variant: "C", Gene: "ADA ", Genotype: "G/G", AlleleCall: "Heterozygous" },
      { id: "6", Used: "", AlleleName: "tvc.novel.2", Ref: "G", Variant: "A", Gene: "LCT", Genotype: "G/G", AlleleCall: "Homozygous" },
      { id: "7", Used: "", AlleleName: "rs1801131", Ref: "T", Variant: "G", Gene: "TPK ", Genotype: "G/A", AlleleCall: "Homozygous" }
    ];
    this.getSeqResultList();
  }

  getSeqResultList() {
    this.filterForm.reset();
    this.dictionaryService.getSequence_results_masterlist().subscribe(
      data => {
        console.log(data)
        this.SeqResultList = data['Sequence_Results_MasterList'];
        if (this.SeqResultList.length >= 0) {
          this.pageSeqResultList = this.SeqResultList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
        }
        this.totalSize = this.SeqResultList.length;
      }
    );
    // this.SeqResultList = this.fakedata;
    // if (this.SeqResultList.length >= 0) {
    //   this.pageSeqResultList = this.SeqResultList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    // }
    // this.totalSize = this.SeqResultList.length;
  }

  public addSeqResultDialog(id, action, item) {
    let dialogRef = this.dialog.open(AddSeqResultComponent, {
      height: 'auto',
      width: '600px',
      autoFocus: false,
    });
    (<AddSeqResultComponent>dialogRef.componentInstance).id = id;
    (<AddSeqResultComponent>dialogRef.componentInstance).action = action;
    (<AddSeqResultComponent>dialogRef.componentInstance).item = item;
    dialogRef.afterClosed().subscribe(data => {
      this.getSeqResultList();
    });
  }

  deleteSeqResult(data) {
    let body = {
      'SequenceResultsMasterId': data
    }
    console.log(body)
    this.dictionaryService.deletesequence_results_master(body).subscribe(
      data => {
        console.log(data)
        if (data['Success'] == true) {
          this.getSeqResultList();
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

    let events = this.SeqResultList;
    if (events != null) {
      let filteredEvents = events.filter(x =>
        (formValues.keyWord == null || JSON.stringify(x).toLowerCase().includes(formValues.keyWord.toLowerCase()))
      );
      console.log(filteredEvents, 'filteredEventssadA')

      this.SeqResultList = filteredEvents;
      this.pageSeqResultList = this.SeqResultList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
      this.totalSize = filteredEvents.length;
      this.handlePage({ pageIndex: 0, pageSize: this.pageSize });
      this.currentPage = 0;
    }

  }

  resetFilter() {
    this.currentPage = 0;
    this.pageSize = 10;
    this.getSeqResultList();
    this.filterForm.reset();
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.pageSeqResultList = this.SeqResultList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

  public handlePageTemp(e: any) {
    this.currentPageTemp = e.pageIndex;
    console.log('pageSize', e.pageSize)
    this.pageSize = e.pageSize;
    this.pageSeqResultList = this.SeqResultList.slice(this.currentPageTemp * this.pageSize, (this.currentPageTemp * this.pageSize) + this.pageSize);
  }


  public uploadCSVDialog() {
    let dialogRef = this.dialog.open(UploadCSVComponent, {
      height: 'auto',
      width: '400px',
      autoFocus: false,

    });
    dialogRef.afterClosed().subscribe(data => {
      this.getSeqResultList();
    });
  }

  public deleteDialog(id) {
    let dialogRef = this.dialog.open(DeleteConfirmDailogComponent, {
      height: 'auto',
      width: '500px',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(data => {
      console.log("datr", data)
      if (data == true) {
        this.deleteSeqResult(id)
      }
    });
  }


}