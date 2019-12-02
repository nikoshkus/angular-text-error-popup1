import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TextErrorModule } from './text-error/text-error.module';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    TextErrorModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
