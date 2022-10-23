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

  {show: "Los Espookys"},
  {show: "House of the Dragon"},
  {show: "Abbott Elementary"},
  {show: "Selena + Chef"},
  {show: "Industry"},
  {show: "Pretty Little Liars: Original Sin"},
  {show: "Genndy Tartakovsky's Primal"},
  {show: "The Rehearsal"},
  {show: "Westworld"},
  {show: "Irma Vep"}
  
];


  constructor(private hboService: HboService) { }

  ngOnInit(): void {
  }

}
