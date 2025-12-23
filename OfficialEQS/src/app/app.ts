import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layaout/header/header';
import { Start } from "./page/start/start";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Start,Start],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('OfficialEQS');
}
