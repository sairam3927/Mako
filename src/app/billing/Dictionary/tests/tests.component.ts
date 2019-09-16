import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { PersonalComponent } from '../Personal/Personal.component';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {
  List: any;

  constructor(public dialog: MatDialog,
    private alertService: AlertService) {
    }
  ngOnInit() {
    this.List = [
      {id: "1" , TestName:"Congenital lactase deficiency", Locus: "rs121908936",Gene:"LCT",Genotype:"A/A",Comment:"This genotype is normal.",Recommendation:"In the absence of other causes, the newborn can consume breast milk / formula containing lactose."},
      {id: "2" , TestName:"Congenital lactase deficiency",Locus: "rs121908936",Gene:"LCT",Genotype:"T/T",Comment:"This genotype associates with congenital lactase deficiency. You will definitely transmit a copy of the mutation to your child.",Recommendation:"It may be necessary to test the other parent or the fetus / newborn." },
      {id: "3" , TestName:"THIAMINE (VITAMIN B1)",Locus: "rs121908936",Gene:"LCT",Genotype:"A/T",Comment:"Having this genotype, you can transmit a copy of the mutation to your child, with 50% chances.",Recommendation:"It may be necessary to test the other parent or the fetus / newborn." },
      {id: "4" , TestName:"THIAMINE (VITAMIN B1)", Locus: "rs121908936",Gene:"LCT",Genotype:"A/A",Comment:"This genotype is normal.",Recommendation:"In the absence of other causes, the newborn can consume breast milk / formula containing lactose.." },
      {id: "5" , TestName:"Congenital lactase deficiency",Locus: "rs121908936",Gene:"LCT",Genotype:"T/T",Comment:"Having this genotype, you can transmit a copy of the mutation to your child, with 50% chances.",Recommendation:"It may be necessary to test the other parent or the fetus / newborn." },
      {id: "6" , TestName:"THIAMINE (VITAMIN B1)",Locus: "rs121908936",Gene:"LCT",Genotype:"A/T",Comment:"This genotype associates with congenital lactase deficiency. You will definitely transmit a copy of the mutation to your child.",Recommendation:"It may be necessary to test the other parent or the fetus / newborn." },
      {id: "7" , TestName:"THIAMINE (VITAMIN B1)",Locus: "rs121908936",Gene:"LCT",Genotype:"A/A",Comment:"This genotype is normal.",Recommendation:"It may be necessary to test the other parent or the fetus / newborn." }
    ];
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
