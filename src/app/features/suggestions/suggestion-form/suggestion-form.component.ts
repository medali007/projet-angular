import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrl: './suggestion-form.component.css'
})
export class SuggestionFormComponent implements OnInit {
  suggestionForm!: FormGroup;
  categories: string[] = [
    'Infrastructure et bâtiments',
    'Technologie et services numériques',
    'Restauration et cafétéria',
    'Hygiène et environnement',
    'Transport et mobilité',
    'Activités et événements',
    'Sécurité',
    'Communication interne',
    'Accessibilité',
    'Autre'
  ];
  nextId: number = 5; // ID auto-incrément (commence après les 4 existants)
  submitted: boolean = false;

  constructor() {}

  ngOnInit() {
    this.suggestionForm = new FormGroup({
      title: new FormControl('', [
        Validators.required, 
        Validators.minLength(5), 
        Validators.pattern('^[A-Z][a-zA-Z]*$')
      ]),
      description: new FormControl('', [
        Validators.required, 
        Validators.minLength(30)
      ]),
      category: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.suggestionForm.valid) {
      const newSuggestion: Suggestion = {
        id: this.nextId++,
        title: this.suggestionForm.get('title')?.value,
        description: this.suggestionForm.get('description')?.value,
        category: this.suggestionForm.get('category')?.value,
        date: new Date(),
        status: 'en_attente',
        nbLikes: 0
      };
      
      console.log('Nouvelle suggestion :', newSuggestion);
      // TODO: Ajouter la suggestion à la liste (via un service)
      
      this.suggestionForm.reset();
      this.submitted = false;
    }
  }


  // Getters pour faciliter l'accès aux contrôles dans le template
  get title() {
    return this.suggestionForm.get('title');
  }

  get description() {
    return this.suggestionForm.get('description');
  }

  get category() {
    return this.suggestionForm.get('category');
  }
}
