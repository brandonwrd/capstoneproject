import { Component, OnInit } from '@angular/core';
import { Hulu } from '../types/Hulu';
import { HuluService } from '../hulu.service';

@Component({
  selector: 'app-hulu',
  templateUrl: './hulu.component.html',
  styleUrls: ['./hulu.component.css']
})
export class HuluComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
