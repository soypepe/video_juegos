export interface Juego {
  id: string
  background_image: string
  name: string
  salida: string
  metacritic_url: string
  website: string
  description: string
  genres: Array<Genero>
  parent_platforms: Array<ParentPlatform>
  autores: Array<Autores>
  calificacion: Array<Calificacion>
  short_screenshots: Array<Screenshots>
  trailers: Array<Trailer>
  metacritic: number
}

export interface APIResponse<T> {
  results: Array<T>
}

interface Genero {
  name: string
}

interface ParentPlatform {
  platform: {
    name: string
    slug: string
  }
}

interface Autores {
  nombre: string
}

interface Calificacion {
  id: number
  cuenta: number
  titulo: string
}

interface Screenshots {
  image: string
}

interface Trailer {
  data: {
    max: string
  }
}