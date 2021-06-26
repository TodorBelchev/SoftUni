import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ThemesComponent } from './components/themes/themes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'themes', component: ThemesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
