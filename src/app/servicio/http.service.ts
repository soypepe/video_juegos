import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment';
import { APIResponse, Juego } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getJuegosLista(
    ordering: string,
    buscar?: string
  ): Observable<APIResponse<Juego>> {
    let params = new HttpParams().set('ordering', ordering)

    if (buscar) {
      params = new HttpParams().set('ordering', ordering).set('buscar', buscar)
    }

    return this.http.get<APIResponse<Juego>>(`${env.BASE_URL}/games`, {
      params: params
    })
  }

  getJuegoDetalles(id: string): Observable<Juego> {
    const juegoInfoRequest = this.http.get(`${env.BASE_URL}/games/${id}`)
    const juegoTrailersRequest = this.http.get(`${env.BASE_URL}/games/${id}/movies`)
    const juegoCapturasRequest = this.http.get(`${env.BASE_URL}/games/${id}/screenshots`)

    return forkJoin({
      juegoInfoRequest,
      juegoTrailersRequest,
      juegoCapturasRequest
    }).pipe(
      map((resp: any) => {
        return {
          ...resp['juegoInfoRequest'],
          screenshots: resp['juegoCapturasRequest']?.results,
          trailers: resp['juegoTrailersRequest']?.results
        }
      })
    )
  }
}
