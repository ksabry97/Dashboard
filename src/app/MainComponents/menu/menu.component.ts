import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  //global variables to manipulate the html :
  isVisible = false; // means it's open or not
  isDropped_menu1 = false;
  isDropped_menu2 = false;
  lang!: any;

  constructor(
    public breakpointObserver: BreakpointObserver,
    public langServ: LanguageService
  ) {} // media query Observer

  // observing media queries :
  //intializing the menu according the media query:taking 1440 as the breakpoint
  ngOnInit(): void {
    const container = document.querySelector('.container_menu');
    this.breakpointObserver
      .observe(['(max-width:1440px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          container?.classList.add('invisble');
        } else {
          container?.classList.remove('invisble');
          this.isVisible = true;
        }
      });

    // observing language
    this.langServ.language$.subscribe((language) => {
      this.lang = language;
      if (this.lang == 'ar') {
        container?.classList.remove('invisble_en');
      } else {
        container?.classList.remove('invisble');
      }
      this.isVisible = false;
      // changing the mini-mmenu layout
      this.changeDir(this.lang);
    });
  }

  // function for menu direection :

  changeDir(lng: string) {
    // the mini menu
    const mini_menu = document.querySelectorAll('.mini-menu');
    mini_menu.forEach((cur) => {
      if (lng == 'ar') {
        cur.classList.remove('mini-menu_en');
        cur.classList.add('mini-menu_ar');
      } else {
        cur.classList.remove('mini-menu_ar');
        cur.classList.add('mini-menu_en');
      }
    });

    // the mini-menu image
    const mini_img = document.querySelectorAll('.mini-menu_img');
    mini_img.forEach((cur) => {
      if (lng == 'ar') {
        cur.classList.remove('mini-menu_img-en');
        cur.classList.add('mini-menu_img-ar');
      } else {
        cur.classList.remove('mini-menu_img-ar');
        cur.classList.add('mini-menu_img-en');
      }
    });
  }

  // opening and closing the menue :
  toggle() {
    const container = document.querySelector('.container_menu');
    if (this.lang == 'ar') {
      container?.classList.remove('invisble_en');
      container?.classList.toggle('invisble');
    } else {
      container?.classList.remove('invisble');
      container?.classList.toggle('invisble_en');
    }
    this.isVisible = !this.isVisible;
  }

  // dropdown mini menues :
  dropDown(id: string) {
    const mini_menu = document.querySelector(`#${id}`);
    mini_menu?.classList.toggle('visible');
    if (id == 'menu1') {
      this.isDropped_menu1 = !this.isDropped_menu1;
    } else {
      this.isDropped_menu2 = !this.isDropped_menu2;
    }
  }
}
