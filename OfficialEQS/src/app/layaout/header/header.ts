import { Component } from '@angular/core';

type Encabezado = {
  id: number,
  nombre: string
}

@Component({
  selector: 'app-header',
  imports: [],
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
    { id: 1, nombre: "Inicio" },
    { id: 2, nombre: "Quienes Somos" },
    { id: 3, nombre: "Calidad" },
    { id: 4, nombre: "Medio Ambiente" },
    { id: 5, nombre: "Seguridad" },
    { id: 6, nombre: "Blog" },
    { id: 7, nombre: "Contacto" }
  ];
}
