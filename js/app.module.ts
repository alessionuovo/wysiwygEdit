import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { App } from './app';

// includes the new-cmp component we created

@NgModule({
   declarations: [
      App
     
   ],
   imports: [
      BrowserModule
   ],
   exports: [App],
   providers: [],
   bootstrap: [App] //for bootstrap the AppComponent the main app component is given.
})

export class AppModule { }