import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ScopeUploadCSVComponent } from './upload-csv/upload-csv.component';
import { PersonalComponent } from '../Personal/Personal.component';
// import { UploadCSVComponent } from '../../SamplePatientData/SeqResults/uploadCSV/uploadCSV.component';

@Component({
  selector: 'app-Scope',
  templateUrl: './Scope.component.html',
  styleUrls: ['./Scope.component.scss']
})
export class ScopeComponent implements OnInit {

  List: any;

  imagePath = '../../../../assets/img/vendor/leaflet/page_under_construction.png';  
  
  constructor(public dialog: MatDialog,
    private alertService: AlertService) {
    }
  ngOnInit() {
    this.List = [
      {id: "1" , AllelName: "rs4846048",description:"The anchor position for this RefSNP. Includes all nucleotides potentially affected by this change, thus it can differ from HGVS, which is right-shifted."},
      {id: "2" , AllelName: "rs1537514",description:"The anchor position for this RefSNP. Includes all nucleotides potentially affected by this change, thus it can differ from HGVS, which is right-shifted." },
      {id: "3" , AllelName: "rs868014",description:"The anchor position for this RefSNP. Includes all nucleotides potentially affected by this change, thus it can differ from HGVS, which is right-shifted." },
      {id: "4" , AllelName: "rs2274976",description:"The anchor position for this RefSNP. Includes all nucleotides potentially affected by this change, thus it can differ from HGVS, which is right-shifted." },
      {id: "5" , AllelName: "tvc.novel.1",description:"The anchor position for this RefSNP. Includes all nucleotides potentially affected by this change, thus it can differ from HGVS, which is right-shifted." },
      {id: "6" , AllelName: "tvc.novel.2",description:"The anchor position for this RefSNP. Includes all nucleotides potentially affected by this change, thus it can differ from HGVS, which is right-shifted." },
      {id: "7" , AllelName: "rs1801131",description:"The anchor position for this RefSNP. Includes all nucleotides potentially affected by this change, thus it can differ from HGVS, which is right-shifted." }
    ];
  }

  public addPatientDataDialog() {
    let dialogRef = this.dialog.open(ScopeUploadCSVComponent, {
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