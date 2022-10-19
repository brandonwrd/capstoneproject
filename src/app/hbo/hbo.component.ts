import { Component, OnInit } from '@angular/core';
import { Hbo } from '../types/Hbo';
import { HboService } from '../hbo.service';

@Component({
  selector: 'app-hbo',
  templateUrl: './hbo.component.html',
  styleUrls: ['./hbo.component.css']
})
export class HboComponent implements OnInit {
  hboShows: Hbo[] = [

  {shows: "Los Espookys"},
  {shows: "House of the Dragon"},
  {shows: "Abbott Elementary"},
  {shows: "Selena + Chef"},
  {shows: "Industry"},
  {shows: "Pretty Little Liars: Original Sin"},
  {shows: "Genndy Tartakovsky's Primal"},
  {shows: "The Rehearsal"},
  {shows: "Westworld"},
  {shows: "Irma Vep"}
  
];


  constructor(private hboService: HboService) { }

  ngOnInit(): void {
  }

}
