import { AddQuoteComponent } from './pages/add-quote/add-quote.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthorComponent } from './pages/author/author.component';
import { QuoteInAuthorComponent } from './pages/author/quote-in-author/quote-in-author.component';
import { QuoteInAdvancedSearchComponent } from './pages/elements/search/quote-in-advanced-search/quote-in-advanced-search.component';
import { QuoteInSearchComponent } from './pages/elements/search/quote-in-search/quote-in-search.component';
import { QuoteInTopicComponent } from './pages/topic/quote-in-topic/quote-in-topic.component';
import { TopicComponent } from './pages/topic/topic.component';
import { QuotesComponent } from './pages/quotes/quotes.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'szukaj/:search', component: QuoteInSearchComponent },
  { path: 'wyszukane/:author/:topic/:year', component: QuoteInAdvancedSearchComponent },
  { path: 'cytaty/:id', component: QuotesComponent },
  { path: 'wg-tematu', component: TopicComponent },
  { path: 'wg-autora', component: AuthorComponent },
  { path: 'dodaj-cytat', component: AddQuoteComponent },
  { path: 'temat/:topic', component: QuoteInTopicComponent },
  { path: 'autor/:author', component: QuoteInAuthorComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
