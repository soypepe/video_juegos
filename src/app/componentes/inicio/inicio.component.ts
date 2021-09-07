import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Juego } from 'src/app/models';
import { HttpService } from 'src/app/servicio/http.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit, OnDestroy {
  public ordenar: string = ''
  public juegos: Array<Juego> = []
  private rutaSub: Subscription | undefined
  private juegoSub: Subscription | undefined

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.rutaSub = this.activatedRoute.params.subscribe((params: Params) => {
      if (params['juego-buscar']) {
        this.buscarJuego('metacrit', params['juego-buscar'])
      } else {
        this.buscarJuego('metacrit')
      }
    })
  }

  buscarJuego(ordenar: string, search?: string): void {
    this.juegoSub = this.httpService
      .getJuegosLista(ordenar, search)
      .subscribe((juegosLista: APIResponse<Juego>) => {
        this.juegos = juegosLista.results
        console.log(this.juegos)
      })
  }

  abrirDetallesJuego(id: string): void {
    this.router.navigate(['detalles', id])
  }

  ngOnDestroy(): void {
    if (this.juegoSub) {
      this.juegoSub.unsubscribe()
    }

    if (this.rutaSub) {
      this.rutaSub.unsubscribe()
    }
  }

}
