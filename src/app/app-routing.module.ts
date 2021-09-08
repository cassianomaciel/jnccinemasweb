import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error-404.component';
import { HomeComponent } from './views/home/home.component';
import { SessaoFormComponent } from './views/sessao-form/sessao-form.component';

const routes: Routes = [
  { path:'', component: HomeComponent  },
  { path:'sessao', component: SessaoFormComponent  }

];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
