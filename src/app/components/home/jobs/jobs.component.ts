import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  Experiences: any[] = [
    {
      Tab: ' Athang Training Academy',
      Title: 'Company',
      Date: 'Oct 2021 – present',
      Description: [
        'In my  6 month OJT as a developer, I seek to train every day.  I am performing continuous integration , and covering front-end developer roles with Athang Training Academy',
      ]
    },
    
  ];
  active = 0
  
  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }

}
