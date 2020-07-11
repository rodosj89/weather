import {inject} from '@loopback/core';
import {
  api,
  get,
  getModelSchemaRef,
  param,
  RequestContext,
  RestBindings,
} from '@loopback/rest';
import {OpenWeatherService} from '../services';
import {ForecastWeatherSpec} from './specs/forecast-weather.specs';
import {LocationSpec} from './specs/location.specs';

const iplocate = require('node-iplocate');

@api({basePath: '/v1', paths: {}})
export class ForecastWeatherController {
  constructor(
    @inject('services.OpenWeather')
    private openWeatherService: OpenWeatherService,
    @inject(RestBindings.Http.CONTEXT) private ctx: RequestContext,
  ) {}

  @get('/forecast', {
    responses: {
      '200': {
        description: 'Forecast weather and details location user request.',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ForecastWeatherSpec),
          },
        },
      },
    },
  })
  async getForecastWeatherByIp() {
    const promesa: LocationSpec = iplocate(
      this.ctx.request.ip,
      null,
      async (err: object, results: object) => {
        return results;
      },
    );
    const city = (await Promise.all([promesa]))[0].subdivision;
    return this.openWeatherService.call('forecast', city);
  }

  @get('/forecast/{city}', {
    responses: {
      '200': {
        description:
          'Forecast weather and details location user request specific.',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ForecastWeatherSpec),
          },
        },
      },
    },
  })
  async getForecastWeatherByCity(@param.path.string('city') city: string) {
    return this.openWeatherService.call('forecast', city);
  }
}
