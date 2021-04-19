import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { GrowItemComponent } from './grow-item/grow-item.component';
import { LoadingItemComponent } from './loading-item/loading-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsListComponent,
    GrowItemComponent,
    LoadingItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
