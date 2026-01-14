import { Component } from '@angular/core';

type piePagina = {
  id: number,
  link: string,
  linkPagina: string
}

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  pie: piePagina[] = [
    { id: 1, link: "https://www.eqsinternational.com/Image/Facebook.webp",linkPagina:"https://www.facebook.com/eqsmexico"},
    { id: 2, link: "https://www.eqsinternational.com/Image/Instagram_1.webp", linkPagina:"https://www.instagram.com/eqsmexico/#" },
    { id: 3, link: "https://www.eqsinternational.com/Image/linkedln_1.webp",linkPagina:"https://www.linkedin.com/in/eqs-sistemas-integrales-de-calidad-seguridad-y-ambiente-sa-de-cv-583b451aa/?originalSubdomain=mx" }
  ]
}
