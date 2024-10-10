import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { AuthMenuComponent } from './header/auth-menu/auth-menu.component';
import { ContainerComponent } from './container/container.component';
import {NgOptimizedImage} from "@angular/common";
import { SearchComponent } from './container/search/search.component';
import {FormsModule} from "@angular/forms";
import { BookListComponent } from './container/book-list/book-list.component';
import { BookComponent } from './container/book-list/book/book.component';
import { FilterComponent } from './container/book-list/filter/filter.component';
import { BookDetailComponent } from './container/book-detail/book-detail.component';
import { RecentBookListComponent } from './container/recent-book-list/recent-book-list.component';
import { RecentBookComponent } from './container/recent-book-list/recent-book/recent-book.component';
import {SetBackground} from "./custom-directives/set-background.directive";
import { HighlightDirective } from './custom-directives/highlight.directive';
import {BookService} from "./services/book.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopMenuComponent,
    AuthMenuComponent,
    ContainerComponent,
    SearchComponent,
    BookListComponent,
    BookComponent,
    FilterComponent,
    BookDetailComponent,
    RecentBookListComponent,
    RecentBookComponent,
    SetBackground,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
