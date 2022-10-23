import { Component, OnInit } from '@angular/core';
import { Prime } from '../types/Prime';
import { PrimeService } from '../prime.service';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class PrimeComponent implements OnInit {
  primeShows: Prime[] = [
  
  {show: "Fairfax"},
  {show: "Jungle"},
  {show: "Yellowjackets"},
  {show: "A Private Affair"},
  {show: "Death Note"},
  {show: "The Lord of the Rings: The Rings of Power"},
  {show: "Paper Girls"},
  {show: "Panic"},
  {show: "A League of Their Own"},
  {show: "Comrade Detective"}

];

  constructor(private primeService: PrimeService) { }

  ngOnInit(): void {
  }

}
