<<<<<<< HEAD
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductsComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App { }
=======
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('haji');
}
>>>>>>> 6e34046327d6b3aab39095475363452c66f8ecfa
