import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import {LoginComponent } from './login/login.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [{
  path: 'test',
  component: TestComponent
},{
  path: 'login',
  component: LoginComponent
},{
  path: 'sample',
  component: SampleComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
