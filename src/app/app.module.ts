import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserCardComponent } from './components/users/user-card/user-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    // CommonModule,
    HttpClientModule,
    AppRoutingModule,
    AkitaNgRouterStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
