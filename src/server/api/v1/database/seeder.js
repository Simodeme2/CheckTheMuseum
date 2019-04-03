/*
Import the external libraries:
- faker
*/
import faker from 'faker';

/*
Import the internal libraries:
- logger
- Post
*/
import { logger } from '../../../utilities';
import { Post } from './schemas';

class Seeder {
    constructor() {
        this.posts = [];
    }

    postCreate = async (title, synopsis, body) => {
        const postDetail = {
            title,
            synopsis,
            body,
        };
        const post = new Post(postDetail);

        try {
            const newPost = await post.save();
            this.posts.push(newPost);

            logger.log({ level: 'info', message: `Post create with id: ${newPost.id}!` });
        } catch (err) {
            logger.log({ level: 'info', message: `An error occurred when creating a : ${err}!` });
        }
    }

  createPosts = async () => {
      await Promise.all([
          (async () => this.postCreate(faker.lorem.sentence(), faker.lorem.paragraph(), `<p>${faker.lorem.paragraphs(10, '</p></p>')}</p>`))(),
          (async () => this.postCreate(faker.lorem.sentence(), faker.lorem.paragraph(), `<p>${faker.lorem.paragraphs(10, '</p></p>')}</p>`))(),
          (async () => this.postCreate(faker.lorem.sentence(), faker.lorem.paragraph(), `<p>${faker.lorem.paragraphs(10, '</p></p>')}</p>`))(),
          (async () => this.postCreate(faker.lorem.sentence(), faker.lorem.paragraph(), `<p>${faker.lorem.paragraphs(10, '</p></p>')}</p>`))(),
          (async () => this.postCreate(faker.lorem.sentence(), faker.lorem.paragraph(), `<p>${faker.lorem.paragraphs(10, '</p></p>')}</p>`))(),
          (async () => this.postCreate(faker.lorem.sentence(), faker.lorem.paragraph(), `<p>${faker.lorem.paragraphs(10, '</p></p>')}</p>`))(),
          (async () => this.postCreate(faker.lorem.sentence(), faker.lorem.paragraph(), `<p>${faker.lorem.paragraphs(10, '</p></p>')}</p>`))(),
      ]);
  }

  seed = async () => {
      this.posts = await Post.estimatedDocumentCount().exec().then(async (count) => {
          if (count === 0) {
              await this.createPosts();
          }
          return Post.find().exec();
      });
  }
}
export default Seeder;
