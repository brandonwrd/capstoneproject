import { Component, OnInit } from '@angular/core';
import { Hulu } from '../types/Hulu';
import { HuluService } from '../hulu.service';

@Component({
  selector: 'app-hulu',
  templateUrl: './hulu.component.html',
  styleUrls: ['./hulu.component.css']
})
export class HuluComponent implements OnInit {
  huluShows: Hulu[] = [{shows: "Schitt's Creek"},
  {shows: "Ramy"},
  {shows: "Abbott Elementary"},
  {shows: "Atlanta"},
  {shows: "The Handmaid's Tale"},
  {shows: "The Patient"},
  {shows: "Welcome to Wrexham"},
  {shows: "This Fool"},
  {shows: "Reservation Dogs"},
  {shows: "The Americans"}];

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
