// import * as sinon from 'sinon';
// import * as chai from 'chai';
// // @ts-ignore
// import chaiHttp = require('chai-http');

// import { app } from '../app';
// import LoginService from '../services/login.service';
// import User from '../database/models/user';

// import { Response } from 'superagent';

// chai.use(chaiHttp);

// const { expect } = chai;
// const service = new LoginService();

// describe('Seu teste', () => {
//   let chaiHttpResponse: Response;

//   before(async () => {
//     sinon
//       .stub(User, "findOne")
//       .resolves(userMock as User[]);
//   });

//   after(()=>{
//     (User.findOne as sinon.SinonStub).restore();
//   })

//   it('get matches', async () => {
//     chaiHttpResponse = await service.start({
//       email: 'string@gmail.com',
//       password: 'stringasd'
//     });
    

//     expect(chaiHttpResponse).to.be.equal(200);
//     expect(chaiHttpResponse).to.be.an('array');
//     expect(chaiHttpResponse).to.be.equal(41);
//   });

//   it('Seu sub-teste', () => {
//     expect(false).to.be.eq(true);
//   });
// });
