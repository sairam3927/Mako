import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, UrlSegment, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-visit-records',
  templateUrl: './visit-records.component.html',
  styleUrls: ['./visit-records.component.scss']
})
export class VisitRecordsComponent implements OnInit {

  constructor(private location:Location,public router: Router,
    public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  checkUrl(type) {
    if(this.router.url != '/sapphire/patients/patientdashboard/patientchart' && this.router.url != '/sapphire/patients/patientdashboard/cases' && this.router.url != '/sapphire/patients/patientdashboard/cases/prescreening' && this.router.url != '/sapphire/patients/patientdashboard/cases/notes' && this.router.url != '/sapphire/patients/patientdashboard/cases/Claims' && this.router.url != '/sapphire/patients/patientdashboard/cases/clinicalObservations'  && this.router.url != '/sapphire/patients/patientdashboard/test' && this.router.url != '/sapphire/patients/patientdashboard/docx' && this.router.url != '/sapphire/patients/patientdashboard/prescreening' && this.router.url != '/sapphire/patients/patientdashboard/clinicalnotes' && this.router.url != '/sapphire/patients/patientdashboard/testnotes' && this.router.url != '/sapphire/patients/patientdashboard/activitylog' && this.router.url != '/sapphire/patients/patientdashboard/scheduledappointments' && this.router.url != '/sapphire/patients/patientdashboard/dashboardclaims'  && this.router.url != '/sapphire/patients/patientdashboard/dashboardnotes') {
        if(type == 'class')
            return 'active-prosp-link';
        else    
            return true;
    }
  }

  goBack() {
    this.location.back();
  }

}
