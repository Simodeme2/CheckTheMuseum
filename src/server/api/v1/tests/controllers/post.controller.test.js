/*
Import the extrnal libraries:
- chai
- chaiHttp
*/
import chai from 'chai';
import chaiHttp from 'chai-http';

/*
Import the internal libraries:
- app
*/
import app from '../../../../index';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Posts", () => {
    describe("GET /", () => {
        // Test to get all students record
        it("should get all posts record", (done) => {
            chai.request(app)
                .get('/api/v1/posts')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });
});