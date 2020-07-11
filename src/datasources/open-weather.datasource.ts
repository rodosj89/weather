import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'openWeather',
  connector: 'rest',
  baseURL: '',
  crud: false,
  options: {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
    strictSSL: false,
  },
  operations: [
    {
      template: {
        method: 'GET',
        url: `http://api.openweathermap.org/data/2.5/{path}?q={cityName}&units=metric&lang=es&appid=${process.env.APPKEY_WEATHER}`,
      },
      functions: {
        call: ['path', 'cityName'],
      },
    },
  ],
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class OpenWeatherDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'openWeather';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.openWeather', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
