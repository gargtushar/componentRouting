import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FirstblockComponent } from './firstblock/firstblock.component';
import { SecondblockComponent } from './secondblock/secondblock.component';
import { routes} from './app.routes';
import { Routes, RouterModule } from '@angular/router';
    
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FirstblockComponent,
    SecondblockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
