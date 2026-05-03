import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsComponent } from './suggestions.component';
import { SuggestionsDetailsComponent } from './suggestions-details/suggestions-details.component';


@NgModule({
  declarations: [
    SuggestionsComponent,
    SuggestionsDetailsComponent
  ],
  imports: [
    CommonModule,
    SuggestionsRoutingModule
  ]
})
export class SuggestionsModule { }
