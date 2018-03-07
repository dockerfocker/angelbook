import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { StudentsList } from './books/naruto-list.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    StudentsList,
    WelcomeComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'narutolist', component: StudentsList},
      {path:'welcome', component: WelcomeComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'} 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
