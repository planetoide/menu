import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  ver = false;
  loggedIn = '';
  registro: string;
  miArreglo = [1, 2, 3, 4, 5];

  ngOnInit() {
    this.registro = localStorage.getItem('item');
  }
  verSpinner() {
    this.ver = true;
    setTimeout(() => {
      this.ver = false;
    }, 5000);
  }

  onClick = () => {
    localStorage.setItem('item', '5' );
  }

}
