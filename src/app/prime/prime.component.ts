import { Component, OnInit } from '@angular/core';
import { Prime } from '../types/Prime';
import { PrimeService } from '../prime.service';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class PrimeComponent implements OnInit {
  primeShows: Prime[] = [];

  constructor(private primeService: PrimeService) { }

  ngOnInit(): void {
  }

}
