import { Component, OnInit } from '@angular/core';
import { Netflix } from '../types/Netflix';
import { NetflixService } from '../netflix.service';

@Component({
  selector: 'app-netflix',
  templateUrl: './netflix.component.html',
  styleUrls: ['./netflix.component.css']
})
export class NetflixComponent implements OnInit {
  netflixShows: Netflix[] = [];

  constructor(private netflixService: NetflixService) { }

  ngOnInit(): void {
    this.getNetflix();
  }

  getNetflix(): void {
    this.netflixService.getNetflix()
      .subscribe(data => {
        console.log(data);
        this.netflixShows = data;
      });
  }

}
