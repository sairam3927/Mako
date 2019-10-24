import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  barChartDataforExceptions: Chart;
  tableList: any;

  constructor() { }

  ngOnInit() {

    this.tableList = [  
        {name:"Johnny" , code:"1JKSW33JAEKDHW"},
        {name:"Albert" , code:"1JKSW33JAEKDHW"},
        {name:"rebecca" , code:"1JKSW33JAEKDHW"},
        {name:"Sai" , code:"1JKSW33JAEKDHW"},
        {name:"George" , code:"1JKSW33JAEKDHW"},
        {name:"Sam" , code:"1JKSW33JAEKDHW"},
        {name:"Emilia" , code:"1JKSW33JAEKDHW"},
        {name:"Nikhil" , code:"1JKSW33JAEKDHW"}
      ]

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
            text: 'Order'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
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
        name: 'Orders',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

    }]
});
  }

}
