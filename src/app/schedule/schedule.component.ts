import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  upcomingCourses: string[];
  constructor() { 
    this.upcomingCourses = [
      'Angular 4 starts on 30 June',
      '.Net Starts on 1 July',
      'SQL starts on 2 Julay'
    ]
  }

  ngOnInit() {
  }

}
