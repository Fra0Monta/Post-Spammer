import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  addArticle(name: HTMLInputElement, surname: HTMLInputElement): boolean {
    console.log(`Adding name: ${name.value} and surname: ${surname.value}`);
    return false;
  }

}
