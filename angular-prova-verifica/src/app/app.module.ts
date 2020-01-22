import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BellaComponent } from './bella/bella.component';

@NgModule({
  declarations: [
    AppComponent,
    BellaComponent
  ],
  imports: [
    BrowserModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
