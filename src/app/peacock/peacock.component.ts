import { Component, OnInit } from '@angular/core';
import { Peacock } from '../types/Peacock';
import { PeacockService } from '../peacock.service';

@Component({
  selector: 'app-peacock',
  templateUrl: './peacock.component.html',
  styleUrls: ['./peacock.component.css']
})
export class PeacockComponent implements OnInit {
  peacockShows: Peacock[] = [];

  constructor(private peacockService: PeacockService) { }

  ngOnInit(): void {
  }

}
