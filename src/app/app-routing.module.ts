import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';

const routes: Routes = [
  {
    path:"",
    component: LoginComponent
  },
  {
    path:"dashboard",
    component: DashComponent
  },
  {
    path: "",
    redirectTo: "/",
    pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

