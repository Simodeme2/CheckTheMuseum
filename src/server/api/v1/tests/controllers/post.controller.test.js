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

        // Test to get all students record
        it("should get one specific post record", (done) => {
            const id = '6246ac50-92d9-4c9c-90d2-38818b7eef74';
            chai.request(app)
                .get(`/api/v1/posts/${id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });

        // Test to get single student record
        it("should not get a single post record", (done) => {
            const id = '256db76b-b110-48c7-8cce-cc03c0a96423';
            chai.request(app)
                .get(`/api/v1/posts/${id}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });
});