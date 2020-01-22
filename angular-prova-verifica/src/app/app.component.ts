import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-prova-verifica';
  articles = new Array<string>();
  addArticle(frase: HTMLInputElement, spam: HTMLInputElement): boolean
  {
    console.log(`spamText: ${frase.value} and spamNum: ${spam.value}`);
     let cont = Number(spam.value);
     for(let i:number =0; i< cont; i++)
    {
        this.articles.push(i + 1 + " " + frase.value);
    }
    console.log(this.articles);
    return false;
  }
}
