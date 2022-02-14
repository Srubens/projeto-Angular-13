import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, NgForm} from '@angular/forms'
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { courseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './Error/Error404.component';

@NgModule({
  declarations: [
    AppComponent,
    courseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', redirectTo: 'courses', pathMatch:'full'},
      {path:'courses', component: courseListComponent},
      {path:'**', component: Error404Component},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
