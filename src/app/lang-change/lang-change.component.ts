import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-lang-change',
  templateUrl: './lang-change.component.html',
  styleUrls: ['./lang-change.component.css'],
})
export class LangChangeComponent {
  // consuming translate Service
  constructor(
    public translate: TranslateService,
    public languageServ: LanguageService
  ) {
    translate.addLangs(['ar', 'en']);
  }

  // function to choose the language
  switch(lang: string) {
    this.translate.use(lang);
    const direction = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.setAttribute('dir', direction); // changing the layout direction according to the language

    this.languageServ.setLang(lang); // sending the language choosen to the service
  }
}
