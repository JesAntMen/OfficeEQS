import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layaout/header/header';
import { Start } from "./page/start/start";
import { Footer } from './layaout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Start,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('OfficialEQS');
}
