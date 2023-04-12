import { Component, OnInit } from '@angular/core';

import { RowHighlightDirective } from './../row-highlight.directive'

@Component({
  selector: 'app-last-weel',
  templateUrl: './last-weel.component.html',
  styleUrls: ['./last-weel.component.css']
})
export class LastWeelComponent implements OnInit {

  constructor() {

  }
  color = 'orange';
  employees: any = [
    {name: "Nagaraj", grade: "C3", doj: "04-20-2023"},
    {name: "Nagaraj", grade: "C3", doj: "04-01-2023"},
    {name: "Nagaraj", grade: "C3", doj: "04-02-2023"},
    {name: "Nagaraj", grade: "C3", doj: "04-03-2023"},
    {name: "Nagaraj", grade: "C3", doj: "04-04-2023"},
    {name: "Nagaraj", grade: "C3", doj: "04-05-2023"},
    {name: "Nagaraj", grade: "C3", doj: "04-06-2023"},
    {name: "Nagaraj", grade: "C3", doj: "04-07-2023"},
    {name: "Nagaraj", grade: "C3", doj: "04-08-2023"},
    {name: "Nagaraj", grade: "C3", doj: "04-09-2023"},
    {name: "Nagaraj", grade: "C3", doj: "04-10-2023"},
    {name: "Nagaraj", grade: "C3", doj: "04-13-2023"},
    {name: "Nagaraj", grade: "C3", doj: "04-12-2023"},
    {name: "Nagaraj", grade: "C3", doj: "03-22-2023"},
    {name: "Nagaraj", grade: "C3", doj: "04-14-2023"},
    {name: "Nagaraj", grade: "C3", doj: "02-20-2023"},
    {name: "Nagaraj", grade: "C3", doj: "06-03-2023"},
    {name: "Nagaraj", grade: "C3", doj: "04-20-2023"}
  ]
  todayDate: any;
  startWeekDate: any
  lastWeekDate: any;
  ngOnInit(): void {

    let dt = new Date();
    this.todayDate = new Date(dt.toString())
    this.startWeekDate = new Date(this.startOfWeek(dt).toString());
    this.lastWeekDate = new Date(this.endOfWeek(dt).toString());

    console.log(this.startWeekDate.toString());
    console.log(this.lastWeekDate.toString());
  }

  checkDate(dt: any) {
    // return (this.todayDate > new Date(dt.toString())) && (this.lastWeekDate > new Date(dt.toString()));
    return (this.startWeekDate <= new Date(dt.toString())) && (this.lastWeekDate >= new Date(dt.toString()));
  }

  endOfWeek(date: any) {
    var lastday = date.getDate() - (date.getDay() - 1) + 6;
    return new Date(date.setDate(lastday));
  }

  startOfWeek(date: any) {
    var lastday = date.getDate() - (date.getDay() - 1) + 6 - 14;
    return new Date(date.setDate(lastday));
  }

}
