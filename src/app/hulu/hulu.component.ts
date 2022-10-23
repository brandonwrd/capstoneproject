import { Component, OnInit } from '@angular/core';
import { Hulu } from '../types/Hulu';
import { HuluService } from '../hulu.service';

@Component({
  selector: 'app-hulu',
  templateUrl: './hulu.component.html',
  styleUrls: ['./hulu.component.css']
})
export class HuluComponent implements OnInit {
  huluShows: Hulu[] = [

  {show: "Schitt's Creek"},
  {show: "Ramy"},
  {show: "Abbott Elementary"},
  {show: "Atlanta"},
  {show: "The Handmaid's Tale"},
  {show: "The Patient"},
  {show: "Welcome to Wrexham"},
  {show: "This Fool"},
  {show: "Reservation Dogs"},
  {show: "The Americans"}
  
];

  constructor() { }

  ngOnInit(): void {
    // this.getHulu();
  }

  // getHulu(): void {
  //   this.huluService.getHulu()
  //   .subscribe(data => {
  //     console.log(data)
  //     this.huluShows = data;
  //   })

  //   }
  }
