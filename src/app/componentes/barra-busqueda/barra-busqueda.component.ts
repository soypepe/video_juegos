import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.scss']
})
export class BarraBusquedaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  enviar(form: NgForm) {
    this.router.navigate(['buscar', form.value.buscar])
  }

}
