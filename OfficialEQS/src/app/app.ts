import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layaout/header/header';
import { Footer } from './layaout/footer/footer';
import { ContactUs } from './layaout/contact-us/contact-us';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ContactUs, Footer, ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('OfficialEQS');
}
