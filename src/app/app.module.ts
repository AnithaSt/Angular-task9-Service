import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { ViewComponent } from './view/view.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    ViewComponent,  
    AddDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'',pathMatch:'full',redirectTo:'home'},
      {path:'home',component:HomeComponent},
      {path:'add-details',component:AddDetailsComponent},
      {path:'view/:id',component:ViewComponent}
    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
