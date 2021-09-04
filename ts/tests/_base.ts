import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../server/app';

chai.use(chaiHttp);

describe('Basic server checks', () => {
  it('Get a heartbeat', (done) => {
    chai.request(app)
      .get('/hello')
      .end((err, res) => {
        chai.expect(res).to.have.status(200);
        chai.expect(res.header["content-type"]).to.contains('application/json');
        chai.expect(res.body).to.be.an('object');
        chai.expect(res.body).to.have.property('greetings').eql('hello!');
        done();
      });
  });
  it('Access a non existing call', (done) => {
    chai.request(app)
      .get('/thisfileshouldnotexists')
      .end((err, res) => {
        chai.expect(res).to.have.status(404);
        chai.expect(res.header["content-type"]).to.contains('application/json');
        chai.expect(res.body).to.have.property('status').eql('FAILURE');
        done();
      });
  });
});
