import { NgClass } from '@angular/common';
import { Component,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { Customers } from "../customers/customers";


type ColorImage = {
  id: number,
  url: string,
  fromClass: string;
  toClass: string;
  titulo: string,
  texto: string,
}

@Component({
  selector: 'app-start',
  imports: [NgClass, Customers],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './start.html',
  styleUrl: './start.css',
})
export class Start {

  colorimage: ColorImage[] = [
    { id: 1, url: "https://www.eqsinternational.com/Image/Calidad.webp", fromClass: "from-[#000066]/65", toClass: "to-[#000066]/0", titulo: "CALIDAD", texto: "Descubre la excelencia en cada detalle. Comprometidos con la calidad superior, nuestros productos están diseñados para superar tus expectativas. ¡Experimenta la diferencia hoy mismo!" },
    { id: 2, url: "https://www.eqsinternational.com/Image/MedioAmbiente.webp", fromClass: "from-[#2c9e39]/65", toClass: "to-[#2c9e39]/0", titulo: "MEDIO AMBIENTE", texto: "En nuestros servicios, nos comprometemos a jugar un papel crucial en la protección del medio ambiente. Con prácticas sostenibles y responsabilidad corporativa, avanzamos hacia un futuro más verde y sostenible." },
    { id: 3, url: "https://www.eqsinternational.com/Image/Seguridad.webp", fromClass: "from-[#d32f24]/65", toClass: "to-[#d32f24]/0", titulo: "SALUD Y SEGURIDAD EN EL TRABAJO", texto: "Protege a tu equipo con nuestros servicios de salud y seguridad en el trabajo. Garantizamos un entorno laboral seguro y saludable,minimizando riesgos y cumpliendo con las normativas vigentes." },
  ]

}

