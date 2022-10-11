import { Component, OnInit } from '@angular/core';
import { Hbo } from '../types/Hbo';
import { HboService } from '../hbo.service';

@Component({
  selector: 'app-hbo',
  templateUrl: './hbo.component.html',
  styleUrls: ['./hbo.component.css']
})
export class HboComponent implements OnInit {

  constructor(private hboService: HboService) { }

  ngOnInit(): void {
  }

}
