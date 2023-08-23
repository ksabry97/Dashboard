import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './MainComponents/sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CenterComponent } from './MainComponents/center/center.component';
import { CardsComponent } from './cards/cards.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { MenuComponent } from './MainComponents/menu/menu.component';
import { SmallCardComponent } from './small-card/small-card.component';
import { TableComponent } from './table/table.component';
import { SearchComponent } from './search/search.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LangChangeComponent } from './lang-change/lang-change.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CenterComponent,
    CardsComponent,
    WidgetsComponent,
    MenuComponent,
    SmallCardComponent,
    TableComponent,
    SearchComponent,
    LangChangeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule,
    DragDropModule,
    MatTooltipModule,
    TranslateModule.forRoot({
      defaultLanguage: 'ar',
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
