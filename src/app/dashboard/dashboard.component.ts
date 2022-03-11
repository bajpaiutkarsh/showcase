import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  projects = [{
    link: 'dynamicaddfields',
    title: 'Dynamic add Fields',
    describe: 'Add/Remove few fields dynamically by clicking add button in form'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
