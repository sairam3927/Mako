import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'src/app/app.settings';
import { Settings } from 'src/app/app.settings.model';
import { single } from '../../pie.data';
import { GenotypeTotal } from '../../piee.data';


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

  constructor(public appSettings:AppSettings) {
    this.settings = this.appSettings.settings; 
    Object.assign(this, {GenotypeTotal}); 
  }
  ngOnInit() {}
  
  public onSelect(event) {
    console.log(event);
  }
}
