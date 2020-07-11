/* eslint-disable */
import {model, Model, property} from '@loopback/repository';

@model()
export class Coord extends Model {
  @property({type: 'number'})
  lon: number;

  @property({type: 'number'})
  lat: number;
}

@model()
export class Weather extends Model {
  @property({type: 'number'})
  id: number;

  @property({type: 'string'})
  main: string;

  @property({type: 'string'})
  description: string;

  @property({type: 'string'})
  icon: string;
}

@model()
export class Main extends Model {
  @property({type: 'number'})
  temp: number;

  @property({type: 'number'})
  feels_like: number;

  @property({type: 'number'})
  temp_min: number;

  @property({type: 'number'})
  temp_max: number;

  @property({type: 'number'})
  pressure: number;

  @property({type: 'number'})
  humidity: number;

  @property({type: 'number'})
  sea_level: number;

  @property({type: 'number'})
  grnd_level: number;
}

@model()
export class Wind extends Model {
  @property({type: 'number'})
  speed: number;

  @property({type: 'number'})
  deg: number;
}

@model()
export class Clouds extends Model {
  @property({type: 'number'})
  all: number;
}

@model()
export class Sys extends Model {
  @property({type: 'string'})
  country: string;

  @property({type: 'number'})
  sunrise: number;

  @property({type: 'number'})
  sunset: number;
}

@model()
export class CurrentWeatherSpec extends Model {
  @property({type: Coord})
  coord: Coord;

  @property({type: 'array', itemType: Weather})
  weather: Weather[];

  @property({type: 'string'})
  base: string;

  @property({type: Main})
  main: Main;

  @property({type: Wind})
  wind: Wind;

  @property({type: Clouds})
  clouds: Clouds;

  @property({type: 'number'})
  dt: number;

  @property({type: Sys})
  sys: Sys;

  @property({type: 'number'})
  timezone: number;

  @property({type: 'number'})
  id: number;

  @property({type: 'string'})
  name: string;

  @property({type: 'number'})
  cod: number;
}
