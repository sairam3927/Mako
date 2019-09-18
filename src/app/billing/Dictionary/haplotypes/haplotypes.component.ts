import { Component, OnInit } from '@angular/core';
import { PersonalComponent } from '../Personal/Personal.component';
import { ScopeUploadCSVComponent } from '../Scope/upload-csv/upload-csv.component';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddHaplotypeComponent } from './add-haplotype/add-haplotype.component';

@Component({
  selector: 'app-haplotypes',
  templateUrl: './haplotypes.component.html',
  styleUrls: ['./haplotypes.component.scss']
})
export class HaplotypesComponent implements OnInit {
  List: any;
  filterToggle:boolean;
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }

  imagePath = '../../../../assets/img/vendor/leaflet/page_under_construction.png';  
  
  constructor(public dialog: MatDialog,
    private alertService: AlertService) {
    }
  ngOnInit() {
    this.List = [
      {id: "1" , RowReference:"rs13123099,rs1230025,rs17033 ", Haplotype:"ALDH1", condition:"1", Comment:"The result of this interaction recommends limiting alcohol consumption to a maximum of 5 g alcohol/day.", Recommendation:"Limit alcohol consumption to a maximum of 5 g/day (total alcohol 100%)."},
      {id: "2" , RowReference:"rs13123099,rs1230025,rs17033 ", Haplotype:"ALDH2", condition:"0", Comment:"The result of this interaction does not recommend an exact limit of daily consumption of alcohol. Alcohol should be consumed with moderation in any situation.", Recommendation:"These results do not recommend  an exact daily limit for alcohol consumption. Alcohol should be consumed with moderation in any situation."},
      {id: "3" , RowReference:"rs17033  ", Haplotype:"ALDH4", condition:"2", Comment:"This result does not recommend an exact limit of daily consumption of acohol. Alcohol should be consumed with moderation in any situation.", Recommendation:"These results do not recommend  an exact daily limit for alcohol consumption. Alcohol should be consumed with moderation in any situation."},
      {id: "4" , RowReference:"rs13123099,rs1230025,rs17033  ", Haplotype:"ALDH5", condition:"1", Comment:"The result of this interaction does not recommend an exact limit of daily consumption of alcohol. Alcohol should be consumed with moderation in any situation.", Recommendation:"Limit alcohol consumption to a maximum of 5 g/day (total alcohol 100%)." },
      {id: "5" , RowReference:"rs1230025,rs13123099,rs1230025,rs17033 ", Haplotype:"SIRT1", condition:"1", Comment:"The result of this interaction recommends limiting alcohol consumption to a maximum of 5 g alcohol/day.", Recommendation:"These results do not recommend  an exact daily limit for alcohol consumption. Alcohol should be consumed with moderation in any situation." },
      {id: "6" , RowReference:"rs13123099", Haplotype:"SIRT1", condition:"2", Comment:"This result does not recommend an exact limit of daily consumption of acohol. Alcohol should be consumed with moderation in any situation.", Recommendation:"These results do not recommend  an exact daily limit for alcohol consumption. Alcohol should be consumed with moderation in any situation."  },
      {id: "7" , RowReference:"rs17033,rs13123099,rs1230025,", Haplotype:"SIRT1", condition:"0", Comment:"The result of this interaction recommends limiting alcohol consumption to a maximum of 5 g alcohol/day.", Recommendation:"Limit alcohol consumption to a maximum of 5 g/day (total alcohol 100%)."}
    ];
  }

  public addPatientDataDialog() {
    let dialogRef = this.dialog.open(AddHaplotypeComponent, {
      height: 'auto',
      width: '500px',
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
