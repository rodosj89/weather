/* eslint-disable */
import {model, Model, property} from '@loopback/repository';

@model()
export class LocationSpec extends Model {
  @property({type: 'string'})
  ip: string;

  @property({type: 'string'})
  country: string;

  @property({type: 'string'})
  country_code: string;

  @property({type: 'string'})
  city: string;

  @property({type: 'string'})
  continent: string;

  @property({type: 'number'})
  latitude: number;

  @property({type: 'number'})
  longitude: number;

  @property({type: 'string'})
  time_zone: string;

  @property({type: 'string'})
  postal_code: string;

  @property({type: 'string'})
  org: string;

  @property({type: 'string'})
  asn: string;

  @property({type: 'string'})
  subdivision: string;

  @property({type: 'string'})
  subdivision2: string;
}
