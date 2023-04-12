import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LastWeelComponent } from './last-weel/last-weel.component';
import { RowHighlightDirective } from './row-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    LastWeelComponent,
    RowHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
