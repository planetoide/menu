import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ver = false;

  verSpinner() {
    this.ver = true;
    setTimeout(() => {
      this.ver = false;
    }, 5000);
  }
}
