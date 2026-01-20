import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

type cards = {
  id: number,
  link: string
  titulo: string,
  text: string
}

@Component({
  selector: 'app-about-us',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {
  openCardId: number | null = null;

  toggleCard(id: number) {
    this.openCardId = this.openCardId === id ? null : id;
  }

  closeCard() {
    this.openCardId = null;
  }

  card: cards[] = [
    { id: 1, titulo: "Amor", text: "Probando si funciona esto", link: "https://www.eqsinternational.com/Image/Calidad.webp" },
    { id: 2, titulo: "Amor", text: "Probando si funciona esto", link: "https://www.eqsinternational.com/Image/Calidad.webp" },
    { id: 3, titulo: "Amor", text: "Probando si funciona esto", link: "https://www.eqsinternational.com/Image/Calidad.webp" }

  ]
}
