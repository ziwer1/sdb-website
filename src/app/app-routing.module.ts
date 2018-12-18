import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
	{path:'home', component:HomeComponent},
	{path:'', redirectTo: '/home', pathMatch: 'full'}
	];

@NgModule({
  imports: [RouterModule.forRoot(routes,
  	{
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }
  	)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
