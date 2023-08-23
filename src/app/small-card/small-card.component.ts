import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/User';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnInit {
  @Input() user!: User;
  lang!: string;

  // obsererving language change:
  constructor(public langService: LanguageService) {}
  ngOnInit(): void {
    this.langService.language$.subscribe((language) => {
      this.lang = language;
    });
  }
}
