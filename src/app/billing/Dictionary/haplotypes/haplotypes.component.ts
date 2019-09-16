import { Component, OnInit } from '@angular/core';
import { PersonalComponent } from '../Personal/Personal.component';
import { ScopeUploadCSVComponent } from '../Scope/upload-csv/upload-csv.component';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-haplotypes',
  templateUrl: './haplotypes.component.html',
  styleUrls: ['./haplotypes.component.scss']
})
export class HaplotypesComponent implements OnInit {
  List: any;

  imagePath = '../../../../assets/img/vendor/leaflet/page_under_construction.png';  
  
  constructor(public dialog: MatDialog,
    private alertService: AlertService) {
    }
  ngOnInit() {
    this.List = [
      {id: "1" , Case: "rs4846048",Level:"",Message:"This genotype is normal."},
      {id: "2" , Case: "rs1537514",Level:"",Message:"This genotype associates with congenital lactase deficiency. You will definitely transmit a copy of the mutation to your child." },
      {id: "3" , Case: "rs868014",Level:"",Message:"Having this genotype, you can transmit a copy of the mutation to your child, with 50% chances." },
      {id: "4" , Case: "rs2274976",Level:"",Message:"This genotype is normal." },
      {id: "5" , Case: "tvc.novel.1",Level:"",Message:"This genotype is normal." },
      {id: "6" , Case: "tvc.novel.2",Level:"",Message:"Having this genotype, you can transmit a copy of the mutation to your child, with 50% chances.." },
      {id: "7" , Case: "rs1801131",Level:"",Message:"This genotype associates with congenital lactase deficiency. You will definitely transmit a copy of the mutation to your child." }
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
