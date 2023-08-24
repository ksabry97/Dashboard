import { Component } from '@angular/core';
import { User } from '../../models/User';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { trigger, transition, style, animate } from '@angular/animations';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  // animation for the drag and drop
  animations: [
    trigger('dragging', [
      transition(':enter', [
        style({ transform: 'scale(1)' }),
        animate('150ms ease'),
      ]),
      transition(':leave', [
        animate('150ms ease', style({ transform: 'scale(0)' })),
      ]),
    ]),
  ],
})
export class SidebarComponent {
  // static data to manupulate the UI
  users: User[] = [
    {
      data: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى ',
      image: '../../assets/sidebar/avatars/avatar-1.png',
      color: '#F2F5F1',
    },
    {
      data: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى ',
      image: '../../assets/sidebar/avatars/avatar-2.png',
      color: '#FFF6E3',
    },
    {
      data: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى ',
      image: '../../assets/sidebar/avatars/avatar-3.png',
      color: '#7661E2',
    },
    {
      data: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى ',
      image: '../../assets/sidebar/avatars/avatar-4.png',
      color: '#F1ECFE',
    },
  ];

  days = [
    {
      name: 'السبت',
      number: 24,
    },
    {
      name: 'الاحد',
      number: 25,
    },
    {
      name: 'الاثنين',
      number: 26,
    },
    {
      name: 'الثلاثاء',
      number: 27,
    },
    {
      name: 'الاربعاء',
      number: 28,
    },
    {
      name: 'الخميس',
      number: 29,
    },
    {
      name: 'الجمعة',
      number: 30,
    },
  ];
  // language variable
  lang!: string;

  // obsererving language change:
  constructor(public langService: LanguageService) {}
  ngOnInit(): void {
    this.langService.language$.subscribe((language) => {
      this.lang = language;
    });
  }

  // Drag and Drop Function :
  onDrop(event: CdkDragDrop<string[] | Event>) {
    moveItemInArray(this.users, event.previousIndex, event.currentIndex);
  }
}
