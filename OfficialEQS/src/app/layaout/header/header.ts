import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


type Encabezado = {
  id: number,
  nombre: string,
  ruta?: string
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})

export class Header {

  menuOpen = false;
  isOpenLogin = false;

  toggleMenuLogin(){
    this.isOpenLogin = !this.isOpenLogin
    this.closeMenu();
  }
  closeMenuLogin(){
    this.isOpenLogin = false
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.closeMenuLogin();
  }

  closeMenu() {
    this.menuOpen = false;
  }

  encabezado: Encabezado[] = [
    { id: 1, nombre: "Inicio", ruta:"/" },
    { id: 2, nombre: "Quienes Somos", ruta:"/about-us" },
    { id: 3, nombre: "Calidad" },
    { id: 4, nombre: "Medio Ambiente" },
    { id: 5, nombre: "Seguridad" },
    { id: 6, nombre: "Blog" },
    { id: 7, nombre: "Contacto" }
  ];
}
