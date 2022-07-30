import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('login', () => {
  let chaiHttpResponse: Response;

  it('login feito com dados corretos', async () => {
    chaiHttpResponse = await chai.request(app)
      .post('/login')
      .send({
        "email": "admin@admin.com",
        "password": "secret_admin"
      });

    expect(chaiHttpResponse).to.have.status(200);
    expect(typeof chaiHttpResponse.body.token).to.be.equal('string');
  });

  it('login feito com dados errados', async () => {
    chaiHttpResponse = await chai.request(app)
      .post('/login')
      .send({
        "email": "invalid@false.com",
        "password": "senha_invalida"
      });

    expect(chaiHttpResponse).to.have.status(401);
    expect(chaiHttpResponse.body.message).to.equal('Incorrect email or password');
  });

  it('login feito sem campo email', async () => {
    chaiHttpResponse = await chai.request(app)
      .post('/login')
      .send({
        "email": "",
        "password": "stringfy"
      });

    expect(chaiHttpResponse).to.have.status(400);
    expect(chaiHttpResponse.body.message).to.be.equal('All fields must be filled');
  });

  it('login feito sem campo password', async () => {
    chaiHttpResponse = await chai.request(app)
      .post('/login')
      .send({
        "email": "stringfy",
        "password": ""
      });

    expect(chaiHttpResponse).to.have.status(400);
    expect(chaiHttpResponse.body.message).to.be.equal('All fields must be filled');
  });
});
