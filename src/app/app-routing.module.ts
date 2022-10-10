import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetflixComponent } from './netflix/netflix.component';
import { HuluComponent } from './hulu/hulu.component';
import { PrimeComponent } from './prime/prime.component';
import { HboComponent } from './hbo/hbo.component';
import { PeacockComponent } from './peacock/peacock.component';

const routes: Routes = [
  { path: 'netlfix', component: NetflixComponent },
  { path: 'hulu', component: HuluComponent },
  { path: 'prime', component: PrimeComponent },
  { path: 'hbo', component: HboComponent },
  { path: 'peacock', component: PeacockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
