import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.less']
})
export class UpcomingEventsComponent implements OnInit {
  eventTitle = 'Competition and Recreation Referee Clinics';
  summary = 'Navigate to the Referee page to find all the info you need!';
  buttonText = 'Learn More';
  constructor() { }

  ngOnInit() {
  }

}
