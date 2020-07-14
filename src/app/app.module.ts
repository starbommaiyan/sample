import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserResolverService } from './services/resolver.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component' 


const appRoutes: Routes= [
  {
     path : 'userdetails',
     component : UserdetailsComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'homepage:/id',
    component: HomepageComponent
  }
] 


@NgModule({
  declarations: [
    AppComponent,
    UserdetailsComponent,
    LoginComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes),HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
