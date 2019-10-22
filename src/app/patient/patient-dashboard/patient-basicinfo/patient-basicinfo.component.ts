import { Component, OnInit, ViewChild, ViewChildren, QueryList, HostListener } from '@angular/core';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { AppSettings } from 'src/app/app.settings';
import { Router, NavigationEnd } from '@angular/router';
import { MenuService } from 'src/app/theme/components/menu/menu.service';
import { Settings } from 'src/app/app.settings.model';
import { PatientDashboardService } from '../patient-dashboard.service';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patient-basicinfo',
  templateUrl: './patient-basicinfo.component.html',
  styleUrls: ['./patient-basicinfo.component.scss']
})
export class PatientBasicinfoComponent implements OnInit {

  @ViewChild('sidenav') sidenav: any;
  @ViewChild('backToTop') backToTop: any;
  @ViewChildren(PerfectScrollbarDirective) pss: QueryList<PerfectScrollbarDirective>;
  public settings: Settings;
  public menus = ['vertical', 'horizontal'];
  public menuOption: string;
  public menuTypes = ['default', 'compact', 'mini'];
  public menuTypeOption: string;
  public isStickyMenu: boolean = false;
  public lastScrollTop: number = 0;
  public showBackToTop: boolean = false;
  public toggleSearchBar: boolean = false;
  private defaultMenu: string; //declared for return default menu when window resized 

  
  public PatientForm: FormGroup;

  constructor(public appSettings: AppSettings, public router: Router, private menuService: MenuService, public fb: FormBuilder,
    public patientDashboardService: PatientDashboardService) {
    this.settings = this.appSettings.settings;
    this.PatientForm = this.fb.group({
      PatientName: new FormControl(''),
      Age: new FormControl(''),
      Gender: new FormControl(''),
      Country: new FormControl(''),
      State: new FormControl(''),
      City: new FormControl(''),
      Ethnicity: new FormControl(''),
      SampleName: new FormControl(''),
      FedexAwb: new FormControl(''),
    });
  }

  ngOnInit() {
    if (window.innerWidth <= 768) {
      this.settings.menu = 'vertical';
      this.settings.sidenavIsOpened = false;
      this.settings.sidenavIsPinned = false;
    }
    this.menuOption = this.settings.menu;
    this.menuTypeOption = this.settings.menuType;
    this.defaultMenu = this.settings.menu;
    // this.getPatientData();
  }

  getPatientData() {
    let body = {
      "PatientId": 1
    }
    console.log("body", body)
    this.patientDashboardService.getpatientinfolist(body).subscribe(
      data => {
        console.log(data)
        let PatientData = data['PatientInfoList'];

        this.PatientForm = this.fb.group({
          PatientName: new FormControl(PatientData["FirstName"]),
          Age: new FormControl(PatientData["Age"]),
          Gender: new FormControl(PatientData["Gender"]),
          Country: new FormControl(PatientData["Country"]),
          State: new FormControl(PatientData["State"]),
          City: new FormControl(PatientData["City"]),
          Ethnicity: new FormControl(PatientData["Ethnicity"]),
          SampleName: new FormControl(PatientData["SampleName"]),
          FedexAwb: new FormControl(PatientData["FedexAwb"]),
        });
      }
    );
  }
  objectKeys = Object.keys;
  items = { keyOne: 'value 1', keyTwo: 'value 2', keyThree: 'value 3' };

  ngAfterViewInit() {
    setTimeout(() => { this.settings.loadingSpinner = false }, 300);
    // this.backToTop.nativeElement.style.display = 'none';  
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (!this.settings.sidenavIsPinned) {
          this.sidenav.close();
        }
        if (window.innerWidth <= 768) {
          this.sidenav.close();
        }
      }
    });
    if (this.settings.menu == "vertical")
      this.menuService.expandActiveSubMenu(this.menuService.getVerticalMenuItems());
  }

  public chooseMenu() {
    this.settings.menu = this.menuOption;
    this.defaultMenu = this.menuOption;
    this.router.navigate(['/']);
  }

  public chooseMenuType() {
    this.settings.menuType = this.menuTypeOption;
  }

  public changeTheme(theme) {
    this.settings.theme = theme;
  }

  public toggleSidenav() {
    this.sidenav.toggle();
  }

  public onPsScrollY(event) {
    (event.target.scrollTop > 300) ? this.backToTop.nativeElement.style.display = 'flex' : this.backToTop.nativeElement.style.display = 'none';
    if (this.settings.menu == 'horizontal') {
      if (this.settings.fixedHeader) {
        var currentScrollTop = (event.target.scrollTop > 56) ? event.target.scrollTop : 0;
        (currentScrollTop > this.lastScrollTop) ? this.isStickyMenu = true : this.isStickyMenu = false;
        this.lastScrollTop = currentScrollTop;
      }
      else {
        (event.target.scrollTop > 56) ? this.isStickyMenu = true : this.isStickyMenu = false;
      }
    }
  }

  public scrollToTop() {
    this.pss.forEach(ps => {
      if (ps.elementRef.nativeElement.id == 'main' || ps.elementRef.nativeElement.id == 'main-content') {
        ps.scrollToTop(0, 250);
      }
    });
  }


  @HostListener('window:resize')
  public onWindowResize(): void {
    if (window.innerWidth <= 768) {
      this.settings.sidenavIsOpened = false;
      this.settings.sidenavIsPinned = false;
      this.settings.menu = 'vertical'
    }
    else {
      (this.defaultMenu == 'horizontal') ? this.settings.menu = 'horizontal' : this.settings.menu = 'vertical'
      this.settings.sidenavIsOpened = true;
      this.settings.sidenavIsPinned = true;
    }
  }

  public closeSubMenus() {
    let menu = document.querySelector(".sidenav-menu-outer");
    if (menu) {
      for (let i = 0; i < menu.children[0].children.length; i++) {
        let child = menu.children[0].children[i];
        if (child) {
          if (child.children[0].classList.contains('expanded')) {
            child.children[0].classList.remove('expanded');
            child.children[1].classList.remove('show');
          }
        }
      }
    }
  }

}
