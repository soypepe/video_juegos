import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Juego } from 'src/app/models';
import { HttpService } from 'src/app/servicio/http.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit, OnDestroy {
  juegoCalificacion = 0
  juegoId: string = ''
  juego: Juego | any
  rutaSub: Subscription | any
  juegoSub: Subscription | any

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.rutaSub = this.ActivatedRoute.params.subscribe((params: Params) => {
      this.juegoId = params['id']
      this.getJuegoDetalles(this.juegoId)
    })
  }

  getJuegoDetalles(id: string): void {
    this.juegoSub = this.httpService
      .getJuegoDetalles(id)
      .subscribe((juegoResp: Juego) => {
        this.juego = juegoResp

        setTimeout(() => {
          this.juegoCalificacion = this.juego.metacritic
        }, 1000);
      })
  }

  getColor(valor: number): string {
    if (valor > 75) {
      return '#5ee432'
    } else if (valor > 50) {
      return '#fffa50'
    } else if (valor > 30) {
      return '#f7aa38'
    } else {
      return '#ef4655'
    }
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
