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
  
  {shows: "A.P. Bio"},
  {shows: "Angelyne"},
  {shows: "Bates Motel"},
  {shows: "Battlestar Galactica"},
  {shows: "Brooklyn Nine-Nine"},
  {shows: "Cheers"},
  {shows: "Chucky"},
  {shows: "Columbo"},
  {shows: "Dr. Death"},
  {shows: "Everybody Hates Chris"}

];


  constructor(private peacockService: PeacockService) { }

  ngOnInit(): void {
  }

}
