import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incoming-status',
  templateUrl: './incoming-status.component.html',
  styleUrls: ['./incoming-status.component.scss']
})
export class IncomingStatusComponent implements OnInit {

  constructor() { }

  imagePath = '../../../../assets/img/vendor/leaflet/page_under_construction.png';

  ngOnInit() {
  }

}
