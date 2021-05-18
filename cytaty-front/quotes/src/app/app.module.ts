import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './pages/nav/nav.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SearchComponent } from './pages/elements/search/search.component';
import { LogoComponent } from './pages/elements/logo/logo.component';
import { QuotesComponent } from './pages/quotes/quotes.component';
import { QuoteCoverComponent } from './shared/quote-cover/quote-cover.component';
import { TopicComponent } from './pages/topic/topic.component';
import { TopicAndAuthorCoverComponent } from './shared/topic-and-author-cover/topic-and-author-cover.component';
import { QuoteInTopicComponent } from './pages/topic/quote-in-topic/quote-in-topic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuoteInSearchComponent } from './pages/elements/search/quote-in-search/quote-in-search.component';
import { QuoteInAdvancedSearchComponent } from './pages/elements/search/quote-in-advanced-search/quote-in-advanced-search.component';
import { NoQuoteFoundComponent } from './pages/no-quote-found/no-quote-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthorComponent } from './pages/author/author.component';
import { QuoteInAuthorComponent } from './pages/author/quote-in-author/quote-in-author.component';
import { AuthorCoverComponent } from './shared/author-cover/author-cover.component';
import { LoginComponent } from './pages/login/login.component';
import { AddQuoteComponent } from './pages/add-quote/add-quote.component';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    SearchComponent,
    LogoComponent,
    QuotesComponent,
    QuoteCoverComponent,
    TopicComponent,
    TopicAndAuthorCoverComponent,
    QuoteInTopicComponent,
    QuoteInSearchComponent,
    QuoteInAdvancedSearchComponent,
    NoQuoteFoundComponent,
    AuthorComponent,
    QuoteInAuthorComponent,
    AuthorCoverComponent,
    LoginComponent,
    AddQuoteComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
