import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Inject,
  OnDestroy,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

type Card = {
  id: number;
  link: string;
  titulo: string;
  text: string;
};

@Component({
  selector: 'app-about-us',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs implements AfterViewInit, OnDestroy {
  @ViewChild('AboutUs', { static: true }) aboutUsSection!: ElementRef<HTMLElement>;
  @ViewChild('vision', { static: true }) visionSection!: ElementRef<HTMLElement>;
  @ViewChild('mision', { static: true }) misionSection!: ElementRef<HTMLElement>;
  @ViewChild('politicaIntegral', { static: true }) politicaSection!: ElementRef<HTMLElement>;

  private ctx?: gsap.Context;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private host: ElementRef<HTMLElement>
  ) { }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    gsap.registerPlugin(ScrollTrigger);

    this.ctx = gsap.context(() => {
      const animateSection = (sectionEl: HTMLElement, fromXPercent: number) => {
        // 1) Crea un timeline para ESA section
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionEl,      // (A) la section controla su animación
            start: 'top center',        // (B) cuando la section toca el top del viewport
            end: '+=50%',           // (C) dura 1 pantalla de scroll (puedes aumentar: '+=150%')
            scrub: false,             // (D) el scroll controla el progreso
            pin: false,               // (E) “congela” la section mientras se anima
            pinSpacing: true,        // (F) deja espacio para que no se encime con la siguiente
            markers: false,           // (G) debug, quítalo al final
            invalidateOnRefresh: true,
          },
          defaults: { ease: 'none' }, // (H) con scrub, ease none se siente “pegado” al scroll
        });

        // 2) Anima la section completa (sin tocar tu HTML)
        tl.fromTo(
          sectionEl,
          { xPercent: fromXPercent, opacity: 0 },
          { xPercent: 0, opacity: 1, duration: 1.5 }
        );
      };

      animateSection(this.visionSection.nativeElement, -100);        // entra desde izquierda
      animateSection(this.misionSection.nativeElement, 100);         // entra desde derecha
      animateSection(this.politicaSection.nativeElement, -100);      // entra desde izquierda

      // 3) Recalcula triggers cuando todo carga (imágenes)
      window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
    }, this.host.nativeElement);
  }

  ngOnDestroy(): void {
    this.ctx?.revert();
  }

  // --- tu lógica ---
  openCardId: number | null = null;

  toggleCard(id: number) {
    this.openCardId = this.openCardId === id ? null : id;
  }

  closeCard() {
    this.openCardId = null;
  }

  card: Card[] = [
    {
      id: 1, titulo: 'Integridad', text: 'Valoramos altamente la ética en nuestras relaciones con clientes y con la sociedad',
      link: 'https://www.eqsinternational.com/Image/Calidad.webp'
    },
    {
      id: 2, titulo: 'Servicio', text: 'Actuamos siempre con enfoque al cliente para la mejora de sus procesos',
      link: 'https://www.eqsinternational.com/Image/Calidad.webp'
    },
    {
      id: 3, titulo: 'Gente', text: 'Apreciamos el trabajo de nuestros colaboradores, y promovemos desarrollo profesional y personal para bien de la sociedad',
      link: 'https://www.eqsinternational.com/Image/Calidad.webp'
    },
  ];
}
