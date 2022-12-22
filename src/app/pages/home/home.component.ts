import { Component } from '@angular/core';
import randomWords from "random-words"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ngOnInit() {
    console.log(randomWords(10))
  }
}
