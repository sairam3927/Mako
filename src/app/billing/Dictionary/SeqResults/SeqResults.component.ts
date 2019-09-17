import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
// import { AlertService } from 'src/app/shared/services/alert.service';
import { UploadCSVComponent } from './uploadCSV/uploadCSV.component';
import { PersonalComponent } from '../Personal/Personal.component';

@Component({
  selector: 'app-SeqResults',
  templateUrl: './SeqResults.component.html',
  styleUrls: ['./SeqResults.component.scss']
})
export class SeqResultsComponent implements OnInit {

  List: any;

  imagePath = '../../../../assets/img/vendor/leaflet/page_under_construction.png';  
  
  constructor( public dialog: MatDialog,) {
    }
  ngOnInit() {
    this.List = [
      {id: "1" , AllelName: "rs4846048", Ref:"G", Variant:"A", Gene:"LCT",Genotype:"G/A ", AllelCall:"Heterozygous"  },
      {id: "2" , AllelName: "rs1537514", Ref:"G", Variant:"C", Gene:"ADA ",Genotype:"G/C", AllelCall:"Abest" },
      {id: "3" , AllelName: "rs868014", Ref:"A", Variant:"G", Gene:"TPK ",Genotype:"A/G", AllelCall:"Homozygous" },
      {id: "4" , AllelName: "rs2274976", Ref:"C", Variant:"T", Gene:"ADA ",Genotype:"C/T", AllelCall:"Absent" },
      {id: "5" , AllelName: "tvc.novel.1", Ref:"G", Variant:"C", Gene:"ADA ",Genotype:"G/G", AllelCall:"Heterozygous" },
      {id: "6" , AllelName: "tvc.novel.2", Ref:"G", Variant:"A", Gene:"LCT",Genotype:"G/G", AllelCall:"Homozygous" },
      {id: "7" , AllelName: "rs1801131", Ref:"T", Variant:"G", Gene:"TPK ",Genotype:"T/G ", AllelCall:"Homozygous" }
    ]
  }

  public uploadCSVDialog() {
    let dialogRef = this.dialog.open(UploadCSVComponent, {
      height: 'auto',
      width: '400px',
      autoFocus: false,
      
    });
    dialogRef.afterClosed().subscribe(data => {
    });
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