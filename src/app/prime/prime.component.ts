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
  
  {shows: "Fairfax"},
  {shows: "Jungle"},
  {shows: "Yellowjackets"},
  {shows: "A Private Affair"},
  {shows: "Death Note"},
  {shows: "The Lord of the Rings: The Rings of Power"},
  {shows: "Paper Girls"},
  {shows: "Panic"},
  {shows: "A League of Their Own"},
  {shows: "Comrade Detective"}

];

  constructor(private primeService: PrimeService) { }

  ngOnInit(): void {
  }

}
