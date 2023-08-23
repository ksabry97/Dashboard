import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  // creating an observable to observe the change of the language among the application
  language$: BehaviorSubject<any> = new BehaviorSubject<any>('');
  constructor() {}

  // updating Language
  setLang(lang: any) {
    this.language$.next(lang);
  }
}
