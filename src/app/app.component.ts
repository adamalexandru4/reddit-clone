import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular', 'http://google.ro/', 1),
      new Article('Angular 2', 'http://facebook.com', 2),
      new Article('Angular 3', 'http://sts.ro', 3)
    ]
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {

    this.articles.push(new Article(title.value, link.value, 0));
    title.value = ``;
    link.value  = ``;
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((art1: Article, art2: Article) => art2.votes - art1.votes);
  }

}
