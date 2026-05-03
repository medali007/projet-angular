import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuggestionsComponent } from './suggestions.component';
import { SuggestionsDetailsComponent } from './suggestions-details/suggestions-details.component';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component';

const routes: Routes = [{ path: '', component: SuggestionsComponent },
  { path: 'suggestions', component: ListSuggestionComponent },
  {path : ':id', component: SuggestionsDetailsComponent},
  {path: 'suggestion-form', component: SuggestionFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionsRoutingModule { }
