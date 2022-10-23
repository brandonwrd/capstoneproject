import { Component, OnInit } from '@angular/core';
import { Netflix } from '../types/Netflix';
import { NetflixService } from '../netflix.service';

@Component({
  selector: 'app-netflix',
  templateUrl: './netflix.component.html',
  styleUrls: ['./netflix.component.css']
})
export class NetflixComponent implements OnInit {
  netflixShows: Netflix[] = [
    
  {show: 'DAHMER - Monster: The Jeffrey Dahmer Story'}, 
  {show: 'The Empress'}, 
  {show: 'Dynasty'}, 
  {show: 'El Rey, Vincente Fernández'}, 
  {show: 'Conversations With a Killer: The John Wayne Gacy Tapes'}, 
  {show: 'Cobra Kai'}, 
  {show: 'In the Dark'}, 
  {show: 'Malverde: El Santo Patrón'}, 
  {show: 'Cocomelon'}, 
  {show: 'Fate: The Winx Saga'}

];

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
