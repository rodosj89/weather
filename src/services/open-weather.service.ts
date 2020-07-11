import {bind, BindingScope, inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {OpenWeatherDataSource} from '../datasources';

export interface OpenWeatherService {
  call(path: string, cityName: string): Promise<OpenWeatherDataSource>;
}

@bind({scope: BindingScope.TRANSIENT})
export class OpenWeatherProvider implements Provider<OpenWeatherService> {
  constructor(
    @inject('datasources.openWeather')
    protected dataSource: OpenWeatherDataSource = new OpenWeatherDataSource(),
  ) {}

  value(): Promise<OpenWeatherService> {
    return getService(this.dataSource);
  }
}
