import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NetflixComponent } from './netflix/netflix.component';
import { HuluComponent } from './hulu/hulu.component';
import { PrimeComponent } from './prime/prime.component';
import { HboComponent } from './hbo/hbo.component';
import { PeacockComponent } from './peacock/peacock.component';

@NgModule({
  declarations: [
    AppComponent,
    NetflixComponent,
    HuluComponent,
    PrimeComponent,
    HboComponent,
    PeacockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
