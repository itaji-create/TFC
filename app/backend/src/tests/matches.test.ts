import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('matches', () => {
  let chaiHttpResponse: Response;

  it('retornar todos os elementos', async () => {
    chaiHttpResponse = await chai.request(app)
      .get('/matches');

    expect(chaiHttpResponse).to.have.status(200);
    expect(typeof chaiHttpResponse.body).to.be.equal('object');
  });
});
