import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

type customers = {
  id: number
  link: string
}

@Component({
  selector: 'app-customers',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers {
  customer: customers[] = [
    { id: 1, link: "https://www.eqsinternational.com/Customer/1.1.webp" },
    { id: 2, link: "https://www.eqsinternational.com/Customer/1.2.webp" },
    { id: 3, link: "https://www.eqsinternational.com/Customer/1.3.webp" },
    { id: 4, link: "https://www.eqsinternational.com/Customer/1.4.webp" },
    { id: 5, link: "https://www.eqsinternational.com/Customer/1.5.webp" },
    { id: 6, link: "https://www.eqsinternational.com/Customer/1.6.webp" },
    { id: 7, link: "https://www.eqsinternational.com/Customer/1.7.webp" },
    { id: 8, link: "https://www.eqsinternational.com/Customer/1.8.webp" },
    { id: 9, link: "https://www.eqsinternational.com/Customer/1.9.webp" },
    { id: 10, link: "https://www.eqsinternational.com/Customer/1.10.webp" },
    { id: 11, link: "https://www.eqsinternational.com/Customer/1.11.webp" },
    { id: 12, link: "https://www.eqsinternational.com/Customer/1.12.webp" },
    { id: 13, link: "https://www.eqsinternational.com/Customer/1.13.webp" },
    { id: 14, link: "https://www.eqsinternational.com/Customer/1.14.webp" },
    { id: 15, link: "https://www.eqsinternational.com/Customer/1.15.webp" },
    { id: 16, link: "https://www.eqsinternational.com/Customer/1.16.webp" },
    { id: 17, link: "https://www.eqsinternational.com/Customer/1.17.webp" },
    { id: 18, link: "https://www.eqsinternational.com/Customer/1.18.webp" },
    { id: 19, link: "https://www.eqsinternational.com/Customer/1.19.webp" },
    { id: 20, link: "https://www.eqsinternational.com/Customer/1.20.webp" },
    { id: 21, link: "https://www.eqsinternational.com/Customer/1.21.webp" },
    { id: 22, link: "https://www.eqsinternational.com/Customer/1.22.webp" },
    { id: 23, link: "https://www.eqsinternational.com/Customer/1.23.webp" },
    { id: 24, link: "https://www.eqsinternational.com/Customer/1.24.webp" },
    { id: 25, link: "https://www.eqsinternational.com/Customer/1.25.webp" },
    { id: 26, link: "https://www.eqsinternational.com/Customer/1.26.webp" },
    { id: 27, link: "https://www.eqsinternational.com/Customer/1.27.webp" },
    { id: 28, link: "https://www.eqsinternational.com/Customer/1.27.webp" },
    { id: 29, link: "https://www.eqsinternational.com/Customer/1.28.webp" },
    { id: 30, link: "https://www.eqsinternational.com/Customer/1.29.webp" },
    { id: 31, link: "https://www.eqsinternational.com/Customer/1.30.webp" },
    { id: 32, link: "https://www.eqsinternational.com/Customer/1.31.webp" },
    { id: 33, link: "https://www.eqsinternational.com/Customer/1.32.webp" },
    { id: 34, link: "https://www.eqsinternational.com/Customer/1.33.webp" },
    { id: 35, link: "https://www.eqsinternational.com/Customer/1.34.webp" },
    { id: 36, link: "https://www.eqsinternational.com/Customer/1.35.webp" },
    { id: 37, link: "https://www.eqsinternational.com/Customer/1.36.webp" },
    { id: 38, link: "https://www.eqsinternational.com/Customer/1.38.webp" },
    { id: 39, link: "https://www.eqsinternational.com/Customer/1.39.webp" },
    { id: 40, link: "https://www.eqsinternational.com/Customer/1.40.webp" },
    { id: 41, link: "https://www.eqsinternational.com/Customer/1.41.webp" },
    { id: 42, link: "https://www.eqsinternational.com/Customer/1.42.webp" },
    { id: 43, link: "https://www.eqsinternational.com/Customer/1.43.webp" },
    { id: 44, link: "https://www.eqsinternational.com/Customer/1.44.webp" },
  ]
}
