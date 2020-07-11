import {Client, expect} from '@loopback/testlab';
import {WeatherApplication} from '../..';
import {setupApplication} from './test-helper';
const nock = require('nock');

const location = require('../responses/location-sanjuan');

describe('locationController', () => {
  let app: WeatherApplication;
  let client: Client;

  beforeEach(async () => {
    ({app, client} = await setupApplication());

    nock('https://www.iplocate.io')
      .get((uri: string) => uri.includes('lookup'))
      .reply(200, location);
  });

  afterEach(async () => {
    await app.stop();
  });

  it('invokes GET /v1/location', async () => {
    const res = await client.get('/v1/location').expect(200);
    expect(res.body).to.containEql(location);
  });
});
