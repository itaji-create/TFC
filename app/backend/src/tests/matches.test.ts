import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Match from '../database/models/match';
import matchMock from './mocks/match.mock';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Seu teste', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(Match, "findAll")
      .resolves(matchMock as Match[]);
  });

  after(()=>{
    (Match.findAll as sinon.SinonStub).restore();
  })

  it('get matches', async () => {
    chaiHttpResponse = await chai
       .request(app).get('/matches');
    console.log(chaiHttpResponse.body.matches);
    

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body.matches).to.be.an('array');
    expect(chaiHttpResponse.body.matches[0].id).to.be.equal(41);
  });

  it('Seu sub-teste', () => {
    expect(false).to.be.eq(true);
  });
});

