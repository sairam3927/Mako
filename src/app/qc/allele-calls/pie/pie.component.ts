import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'src/app/app.settings';
import { QcService } from '../../qc.service';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html'
})
export class PieComponent implements OnInit {
  public GenotypeSingle: any[];
  public multi: any[];
  public showLegend = true;
  public gradient = true;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;

  AbsentTotal = 0;
  HeterozygousTotal = 0;
  HomozygousTotal = 0;
  NoCallTotal = 0;

  constructor(public appSettings: AppSettings,  public qcService: QcService) {
  }

  async ngOnInit() {
    this.getAllelCall()
  }

  getAllelCall() {

    this.qcService.getqclist().subscribe(
      data => {
        console.log(data)
        let PatientList = data['QCList'];
        let GenotypeSingle = [];

        for (let i = 0; i < PatientList.length; i++) {
          this.AbsentTotal = this.AbsentTotal + PatientList[i].AlleleCount;
        }
        
        for (let i = 0; i < PatientList.length; i++) {
          this.HeterozygousTotal = this.HeterozygousTotal + PatientList[i].HeterozygousCount
        }
        
        for (let i = 0; i < PatientList.length; i++) {
          this.HomozygousTotal = this.HomozygousTotal + PatientList[i].HomozygousCount
        }
        
        for (let i = 0; i < PatientList.length; i++) {
          this.NoCallTotal = this.NoCallTotal + PatientList[i].NocallCount;
        }
        let total = this.AbsentTotal + this.HeterozygousTotal + this.HomozygousTotal + this.NoCallTotal
        GenotypeSingle.push({
          name: 'Absent',
          value: ((this.AbsentTotal/total)*100).toFixed(1)
        })
        GenotypeSingle.push({
          name: 'Heterozygous',
          value: ((this.HeterozygousTotal/total)*100).toFixed(1)
        })
        GenotypeSingle.push({
          name: 'Homozygous',
          value: ((this.HomozygousTotal/total)*100).toFixed(1)
        })
        GenotypeSingle.push({
          name: 'No Call',
          value: ((this.NoCallTotal/total)*100).toFixed(1)
        })
        Object.assign(this, { GenotypeSingle });
      }
    );
  }

  public onSelect(event) {
    console.log(event);
  }

}