import {inject} from '@loopback/core';
import {
  api,
  get,
  getModelSchemaRef,
  RequestContext,
  RestBindings,
} from '@loopback/rest';
import {LocationSpec} from './specs/location.specs';
const iplocate = require('node-iplocate');

@api({basePath: '/v1', paths: {}})
export class LocationController {
  constructor(@inject(RestBindings.Http.CONTEXT) private ctx: RequestContext) {}

  @get('/location', {
    responses: {
      '200': {
        description: 'Get current location details of user request.',
        content: {
          'application/json': {
            schema: getModelSchemaRef(LocationSpec),
          },
        },
      },
    },
  })
  async getLocationDetails() {
    const promesa: LocationSpec = iplocate(
      this.ctx.request.ip,
      null,
      async (err: object, results: object) => {
        return results;
      },
    );
    return (await Promise.all([promesa]))[0];
  }
}
