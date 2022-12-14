import { Component, OnInit } from '@angular/core';
import { Peacock } from '../types/Peacock';
import { PeacockService } from '../peacock.service';

@Component({
  selector: 'app-peacock',
  templateUrl: './peacock.component.html',
  styleUrls: ['./peacock.component.css']
})
export class PeacockComponent implements OnInit {
  peacockShows: Peacock[] = [
  
  {show: "A.P. Bio"},
  {show: "Angelyne"},
  {show: "Bates Motel"},
  {show: "Battlestar Galactica"},
  {show: "Brooklyn Nine-Nine"},
  {show: "Cheers"},
  {show: "Chucky"},
  {show: "Columbo"},
  {show: "Dr. Death"},
  {show: "Everybody Hates Chris"}

];


  constructor(private peacockService: PeacockService) { }

  ngOnInit(): void {
  }

}
