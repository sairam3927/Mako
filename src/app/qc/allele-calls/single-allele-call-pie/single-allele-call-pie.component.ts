import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/app/app.settings.model';
import { AppSettings } from 'src/app/app.settings';
import { Single } from '../../pie.data';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-single-allele-call-pie',
  templateUrl: './single-allele-call-pie.component.html',
  styleUrls: ['./single-allele-call-pie.component.scss']
})
export class SingleAlleleCallPieComponent{
  public Single: any[];
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

  constructor(public appSettings:AppSettings,public dialogRef: MatDialogRef<SingleAlleleCallPieComponent>) {
    this.settings = this.appSettings.settings; 
    Object.assign(this, {Single}); 
  }
  
  public onSelect(event) {
    console.log(event);
  }
  close(): void {
    this.dialogRef.close();
  }

}
