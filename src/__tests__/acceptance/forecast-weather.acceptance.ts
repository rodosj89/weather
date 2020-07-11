import {Client, expect} from '@loopback/testlab';
import {WeatherApplication} from '../..';
import {setupApplication} from './test-helper';
const nock = require('nock');

const location = require('../responses/location-sanjuan');

const forecast = require('../responses/forecast-200');

const weatherNotFound = require('../responses/weather-404');

describe('ForecastWeatherController', () => {
  let app: WeatherApplication;
  let client: Client;

  beforeEach(async () => {
    ({app, client} = await setupApplication());

    nock('http://api.openweathermap.org')
      .get((uri: string) => uri.includes('forecast?q=San%20Juan'))
      .reply(200, forecast);

    nock('http://api.openweathermap.org')
      .get((uri: string) => uri.includes('Gotica'))
      .reply(404, weatherNotFound);

    nock('https://www.iplocate.io')
      .get((uri: string) => uri.includes('lookup'))
      .reply(200, location);
  });

  afterEach(async () => {
    await app.stop();
  });

  it('invokes GET /v1/forecast', async () => {
    const res = await client.get('/v1/forecast').expect(200);
    expect(res.body).to.containEql(forecast);
  });

  it('invokes GET /v1/forecast/San%20Juan', async () => {
    const res = await client.get('/v1/forecast/San%20Juan').expect(200);
    expect(res.body).to.containEql(forecast);
  });

  it('invokes GET /v1/forecast/Gotica', async () => {
    const res = await client.get('/v1/forecast/Gotica').expect(404);
    expect(res.body).to.containEql(weatherNotFound);
  });
});
