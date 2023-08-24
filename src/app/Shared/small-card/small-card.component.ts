import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnInit {
  // using the input tp get data dynamically from the parent component
  @Input() user!: User;
  lang!: string; // Language change variable

  // obsererving language change:
  constructor(public langService: LanguageService) {}
  ngOnInit(): void {
    this.langService.language$.subscribe((language) => {
      this.lang = language;
    });
  }
}
