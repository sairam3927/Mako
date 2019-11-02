import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'src/app/app.settings';
import { Settings } from 'src/app/app.settings.model';
import { single } from '../../pie.data';
import { GenotypeTotal } from '../../piee.data';
import { QcService } from '../../qc.service';


@Component({
  selector: 'app-genotype-total-pie',
  templateUrl: './genotype-total-pie.component.html',
  styleUrls: ['./genotype-total-pie.component.scss']
})
export class GenotypeTotalPieComponent implements OnInit {
  public GenotypeTotal: any[];
  public multi: any[];
  public showLegend = true;
  public gradient = true;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  }; 
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;

  AbyATotal = 0;
  AbyTTotal = 0;
  AbyGTotal = 0;
  GbyCTotal = 0;
  GbyTTotal = 0;
  GbyGTotal = 0;
  CbyCTotal = 0;
  CbyTTotal = 0;
  TbyTTotal = 0;

  constructor(public appSettings:AppSettings,  public qcService: QcService) {
    this.settings = this.appSettings.settings; 
    // Object.assign(this, {GenotypeTotal}); 
  }
  async ngOnInit() {
    this.getGenoType()
 }

 getGenoType() {
  this.qcService.getqclist().subscribe(
    data => {
      console.log(data)
      let PatientList = data['QCList'];
      let GenotypeTotal = [];

        for (let i = 0; i < PatientList.length; i++) {
          this.AbyATotal = this.AbyATotal + PatientList[i].AbyA;
        }
        
        for (let i = 0; i < PatientList.length; i++) {
          this.AbyTTotal = this.AbyTTotal + PatientList[i].AbyT;
        }
        
        for (let i = 0; i < PatientList.length; i++) {
          this.AbyGTotal = this.AbyGTotal + PatientList[i].AbyG;
        }
        
        for (let i = 0; i < PatientList.length; i++) {
          this.GbyCTotal = this.GbyCTotal + PatientList[i].GbyC;
        }
        
        for (let i = 0; i < PatientList.length; i++) {
          this.GbyTTotal = this.GbyTTotal + PatientList[i].GbyT;
        }
        
        for (let i = 0; i < PatientList.length; i++) {
          this.GbyGTotal = this.GbyGTotal + PatientList[i].GbyG;
        }
        
        for (let i = 0; i < PatientList.length; i++) {
          this.CbyCTotal = this.CbyCTotal + PatientList[i].CbyC;
        }
        
        for (let i = 0; i < PatientList.length; i++) {
          this.CbyTTotal = this.CbyTTotal + PatientList[i].CbyT;
        }
        
        for (let i = 0; i < PatientList.length; i++) {
          this.TbyTTotal = this.TbyTTotal + PatientList[i].TbyT;
        }

        let total = this.AbyATotal + this.AbyTTotal + this.AbyGTotal + this.GbyCTotal + this.GbyTTotal + this.GbyGTotal + this.CbyCTotal + this.CbyTTotal + this.TbyTTotal
        GenotypeTotal.push({
          name: 'A/A',
          value: ((this.AbyATotal/total)*100).toFixed(1)
        },)
        GenotypeTotal.push({
          name: 'A/T',
          value: ((this.AbyTTotal/total)*100).toFixed(1)
        },)
        GenotypeTotal.push({
          name: 'A/G',
          value: ((this.AbyGTotal/total)*100).toFixed(1)
        },)
        GenotypeTotal.push({
          name: 'G/C',
          value: ((this.GbyCTotal/total)*100).toFixed(1)
        },)
        GenotypeTotal.push({
          name: 'G/T',
          value: ((this.GbyTTotal/total)*100).toFixed(1)
        },)
        GenotypeTotal.push({
          name: 'G/G',
          value: ((this.GbyGTotal/total)*100).toFixed(1)
        },)
        GenotypeTotal.push({
          name: 'C/C',
          value: ((this.CbyCTotal/total)*100).toFixed(1)
        },)
        GenotypeTotal.push({
          name: 'C/T',
          value: ((this.CbyTTotal/total)*100).toFixed(1)
        },)
        GenotypeTotal.push({
          name: 'T/T',
          value: ((this.TbyTTotal/total)*100).toFixed(1)
        },)

        Object.assign(this, { GenotypeTotal });
    }
  );
}
  
  public onSelect(event) {
    console.log(event);
  }
}
