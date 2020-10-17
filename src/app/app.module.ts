import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CardModule,
        InputTextModule,
        ButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
