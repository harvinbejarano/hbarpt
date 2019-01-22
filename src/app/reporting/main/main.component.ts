import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  availablecategories: string[];
  initialReportsData: any = [];
  filteredData: any;

  constructor() { 
   
  }

  ngOnInit() {
    this.availablecategories = ['Category 1', 'Category 2'];
    this.initialReportsData = [
      {
        categoryName: 'Category 1', reports: [{ reportName: 'Report 1' }, { reportName: 'Report 2' }]
      },
      {
        categoryName: 'Category 2', reports: [{ reportName: 'Report 3' }, { reportName: 'Report 4' }]
      }
    ];

    //clone
    this.filteredData = {};
    this.availablecategories.forEach((categoryName) => {

      this.filteredData[categoryName] = this.initialReportsData.filter(report => report.categoryName === categoryName);
      debugger;
			/*this.filteredData[categoryName] = [ ...this.initialReportsData[categoryName] ].map((item) => {
				return { ...item };
      });*/

      
    });
    debugger;

  }

  
}
