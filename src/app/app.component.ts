import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my <app>';

  onButtonOneClicked(state) {
    console.log(`button 1 is ${state}`);
  }
}
