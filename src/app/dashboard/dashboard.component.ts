import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { DashboardService } from './dashboard.service';
import { AlertService } from '../shared/services/alert.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers:[AlertService]
})
export class DashboardComponent implements OnInit {
    filterToggle: boolean;
    toggleFilter() {
        this.filterToggle = !this.filterToggle;
    }
    barChartDataforExceptions: Chart;
    TableList1: any;
    pageTableList1: any;
    TableList2: any;
    pageTableList2: any;
    public dateTime1: Date;
    PendingSamples: any;
    ReservedSamples: any;
    barChartInput = [];

    public pageSize = 10;
    public pageSizeTable2 = 10;
    public currentPage = 0;
    public totalSize = 0;
    public currentPageTable2 = 0;
    public totalSizeTable2 = 0;

    constructor(public dashboardService: DashboardService, public alertService: AlertService) { }

    ngOnInit() {
        this.getTableList();
        this.barChartData();
    }

    getTableList() {

        this.dashboardService.getdashboardlist().subscribe(
            data => {
                console.log(data)
                this.TableList1 = data['DashbordList3'];
                this.PendingSamples = data['DashbordList2'];

                if (this.TableList1 && this.TableList1.length >= 0) {
                    this.pageTableList1 = this.TableList1.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
                }
                this.totalSize = this.TableList1 != null ? this.TableList1.length : 0;

                this.TableList2 = data['DashbordList1'];
                this.ReservedSamples = data['DashbordList4'];

                if (this.TableList2 && this.TableList2.length >= 0) {
                    this.pageTableList2 = this.TableList2.slice(this.currentPage * this.pageSizeTable2, (this.currentPage * this.pageSizeTable2) + this.pageSizeTable2);
                }
                this.totalSizeTable2 = this.TableList2 != null ? this.TableList2.length : 0;

            }
        );
    }

    public handlePage(e: any) {
        this.currentPage = e.pageIndex;
        this.pageSize = e.pageSize;
        this.pageTableList1 = this.TableList1.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    }

    public handlePageTable2(e: any) {
        this.currentPageTable2 = e.pageIndex;
        console.log('pageSizeTable2', e.pageSizeTable2)
        this.pageSizeTable2 = e.pageSize;
        this.pageTableList2 = this.TableList2.slice(this.currentPageTable2 * this.pageSizeTable2, (this.currentPageTable2 * this.pageSizeTable2) + this.pageSizeTable2);
    }

   async barChartData() {

       await this.dashboardService.getorderscountyearly().subscribe(
            data => {
                console.log(data,"bar chart data")
                let response = data
                let input = [];

                let check = ["JanSum","FebSum","MarSum","AprSum","MaySum","JuneSum","JulySum","AugSum","SepSum","OctSum","NovSum","DecSum"]

                for (let i = 0 ; i < check.length;i++){
                    let month = check[i] ;
                    console.log(month,'month')
                    console.log(response[month],'response[month]');
                    if (response[month] != 0){
                        input.push(response[month])
                    }else{
                        input.push(0)
                    }
                }
                
                this.barChartInput = input;
                
                this.barChartDataforExceptions = new Chart({
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Order Summary-2019'
                    },
        
                    xAxis: {
                        categories: [
                            'Jan',
                            'Feb',
                            'Mar',
                            'Apr',
                            'May',
                            'Jun',
                            'Jul',
                            'Aug',
                            'Sep',
                            'Oct',
                            'Nov',
                            'Dec'
                        ],
                        crosshair: true,
                        title: {
                            text: '2019'
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Amount'
                        }
                    },
                    tooltip: {
                        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                            '<td style="padding:0"><b>{point.y:.1f} $</b></td></tr>',
                        footerFormat: '</table>',
                        shared: true,
                        useHTML: true
                    },
                    plotOptions: {
                        column: {
                            pointPadding: 0.2,
                            borderWidth: 0
                        }
                    },
                    series: [
                        {
                            name: 'Amount',
                            data: this.barChartInput,
                        }
                    ]
                });
            }
        );
    }

}
