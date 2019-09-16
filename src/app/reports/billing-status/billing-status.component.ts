import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing-status',
  templateUrl: './billing-status.component.html',
  styleUrls: ['./billing-status.component.scss']
})
export class BillingStatusComponent implements OnInit {

  constructor() { }

  imagePath = '../../../../assets/img/vendor/leaflet/page_under_construction.png';

  ngOnInit() {
  }

}
