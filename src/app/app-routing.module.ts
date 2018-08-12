import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { RegisterComponent } from './register/register.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path:"",
    component: LoginComponent
  },
  {
    path:"register",
    component: RegisterComponent
  },
  {
    path:"dash",
    component: DashComponent
  },
  {
    path: "",
    redirectTo: "/",
    pathMatch: "full"
  },
];

@NgModule({
  imports: [
     RouterModule.forRoot(routes), 
     HttpModule,
     HttpClientModule 
    ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

