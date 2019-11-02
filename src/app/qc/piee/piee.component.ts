import { Component, OnInit } from '@angular/core';
// import { GenotypeSingle } from '../piee.data';
import { AppSettings } from 'src/app/app.settings';
import { QcService } from '../qc.service';

@Component({
  selector: 'app-piee',
  templateUrl: './piee.component.html'
})
export class PieeComponent  {
  public GenotypeSingle: any[];
  public multi: any[];
  public showLegend = true;
  public gradient = true;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };
  public PatientList1: any;
  public PatientList2: any;
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;

  AbsentTotal = 0;
  HeterozygousTotal = 0;
  HomozygousTotal = 0;
  NoCallTotal = 0;

  constructor(public appSettings: AppSettings, public qcService: QcService) {
  }

  public onSelect(event) {
    console.log(event);
  }

}