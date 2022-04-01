import { GhUsersModule } from './gh-users/gh-users.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GhUsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
