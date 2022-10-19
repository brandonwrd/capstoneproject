import { Component, OnInit } from '@angular/core';
import { Netflix } from '../types/Netflix';
import { NetflixService } from '../netflix.service';

@Component({
  selector: 'app-netflix',
  templateUrl: './netflix.component.html',
  styleUrls: ['./netflix.component.css']
})
export class NetflixComponent implements OnInit {
  netflixShows: Netflix[] = [{shows: 'DAHMER - Monster: The Jeffrey Dahmer Story'}, 
  {shows: 'The Empress'}, 
  {shows: 'Dynasty'}, 
  {shows: 'El Rey, Vincente Fernández'}, 
  {shows: 'Conversations With a Killer: The John Wayne Gacy Tapes'}, 
  {shows: 'Cobra Kai'}, 
  {shows: 'In the Dark'}, 
  {shows: 'Malverde: El Santo Patrón'}, 
  {shows: 'Cocomelon'}, 
  {shows: 'Fate: The Winx Saga'}];

  constructor() { }

  ngOnInit(): void {
    // this.getNetflix();
  }

  // getNetflix(): void {
  //   this.netflixService.getNetflix()
  //     .subscribe(data => {
  //       console.log(data);
  //       this.netflixShows = data;
  //     });
  // }

}
