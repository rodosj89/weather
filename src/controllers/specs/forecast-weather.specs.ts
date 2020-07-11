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
export class MainForecast extends Model {
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
  sea_level: number;

  @property({type: 'number'})
  grnd_level: number;

  @property({type: 'number'})
  humidity: number;

  @property({type: 'number'})
  temp_kf: number;
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
export class Syst extends Model {
  @property({type: 'string'})
  pod: string;
}

@model()
export class WeatherDetail extends Model {
  @property({type: 'number'})
  dt: number;

  @property({type: MainForecast})
  main: MainForecast;

  @property({type: 'array', itemType: Weather})
  weather: Weather[];

  @property({type: Clouds})
  clouds: Clouds;

  @property({type: Wind})
  wind: Wind;

  @property({type: Syst})
  sys: Syst;

  @property({type: 'string'})
  dt_txt: string;
}

@model()
export class City extends Model {
  @property({type: 'number'})
  'id': number;

  @property({type: 'string'})
  name: string;

  @property({type: Coord})
  coord: Coord;

  @property({type: 'string'})
  country: string;

  @property({type: 'number'})
  population: number;

  @property({type: 'number'})
  timezone: number;

  @property({type: 'number'})
  sunrise: number;

  @property({type: 'number'})
  sunset: number;
}

@model()
export class ForecastWeatherSpec extends Model {
  @property({type: 'string'})
  cod: string;

  @property({type: 'number'})
  message: number;

  @property({type: 'number'})
  cnt: number;

  @property({type: 'array', itemType: WeatherDetail})
  list: WeatherDetail[];

  @property({type: City})
  city: City;
}
