import { Component } from '@angular/core';

type ColorImage = {
  id: number,
  url: string,
  color: string,
  degradado:string,
  titulo: string,
  texto: string,
}

@Component({
  selector: 'app-start',
  imports: [],
  templateUrl: './start.html',
  styleUrl: './start.css',
})
export class Start {
  colorimage: ColorImage[] = [
    {id:1,url:"https://www.eqsinternational.com/Image/Calidad.webp",color:"000066",degradado:"000066",titulo:"CALIDAD",texto:"Descubre la excelencia en cada detalle. Comprometidos con la calidad superior, nuestros productos están diseñados para superar tus expectativas. ¡Experimenta la diferencia hoy mismo!"},
    {id:2,url:"https://www.eqsinternational.com/Image/MedioAmbiente.webp",color:"",degradado:"",titulo:"MEDIO AMBIENTE",texto:"En nuestros servicios, nos comprometemos a jugar un papel crucial en la protección del medio ambiente. Con prácticas sostenibles y responsabilidad corporativa, avanzamos hacia un futuro más verde y sostenible."},
    {id:3,url:"https://www.eqsinternational.com/Image/Seguridad.webp",color:"",degradado:"",titulo:"SALUD Y SEGURIDAD EN EL TRABAJO",texto:"Protege a tu equipo con nuestros servicios de salud y seguridad en el trabajo. Garantizamos un entorno laboral seguro y saludable,minimizando riesgos y cumpliendo con las normativas vigentes."},
  ]
}
