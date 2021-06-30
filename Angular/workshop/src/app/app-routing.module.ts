import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InvalidComponent } from './core/components/invalid/invalid.component';
import { AuthService } from './services/auth.service';
import { CreateComponent } from './theme/create/create.component';
import { DetailsComponent } from './theme/details/details.component';
import { ThemesComponent } from './theme/themes/themes.component';
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'themes', component: ThemesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: ':id/details', component: DetailsComponent },
  { path: 'theme/create', component: CreateComponent, canActivate: [AuthService] },
  { path: ':id/profile', component: ProfileComponent, canActivate: [AuthService] },
  { path: ':id/profile/edit', component: EditProfileComponent, canActivate: [AuthService] },
  { path: '**', component: InvalidComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
