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
import {CurrentWeatherSpec} from './specs/current-weather.specs';
import {LocationSpec} from './specs/location.specs';
const iplocate = require('node-iplocate');

@api({basePath: '/v1', paths: {}})
export class CurrentWeatherController {
  constructor(
    @inject('services.OpenWeather')
    private openWeatherService: OpenWeatherService,
    @inject(RestBindings.Http.CONTEXT) private ctx: RequestContext,
  ) {}

  @get('/current', {
    responses: {
      '200': {
        description: 'Current weather and details location user request.',
        content: {
          'application/json': {
            schema: getModelSchemaRef(CurrentWeatherSpec),
          },
        },
      },
    },
  })
  async getCurrentWeatherByIp() {
    const promesa: LocationSpec = iplocate(
      this.ctx.request.ip,
      null,
      async (err: object, results: object) => {
        return results;
      },
    );
    const city = (await Promise.all([promesa]))[0].subdivision;
    return this.openWeatherService.call('weather', city);
  }

  @get('/current/{city}', {
    responses: {
      '200': {
        description:
          'Current weather and details location user request specific.',
        content: {
          'application/json': {
            schema: getModelSchemaRef(CurrentWeatherSpec),
          },
        },
      },
    },
  })
  async getCurrentWeatherByCity(@param.path.string('city') city: string) {
    return this.openWeatherService.call('weather', city);
  }
}
