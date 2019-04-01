/*
Import the external libraries:
- faker
*/
import faker from 'faker';

/*
Import the internal libraries:
- Post
*/
import { Post } from './schemas'

class Seeder {
  constructor() {
    this.posts = [];
  }

  postCreate = async (title, synopsis) => {
    const postDetail = {
      title: title,
      synopsis: synopsis
    };
    const post = new Post(postDetail);
    try {
      const newPost = await post.save();
      this.posts.push(newPost);

      console.log(`Post create with id: ${ newPost._id }!`);
    } catch(err) {
      console.log(`Post create with id: ${ err }!`);
    }
  }

  createPosts = async () => {
    await Promise.all([
      (async() => await this.postCreate(faker.lorem.sentence(), faker.lorem.paragraph()))(),
      (async() => await this.postCreate(faker.lorem.sentence(), faker.lorem.paragraph()))(),
      (async() => await this.postCreate(faker.lorem.sentence(), faker.lorem.paragraph()))(),
      (async() => await this.postCreate(faker.lorem.sentence(), faker.lorem.paragraph()))(),
      (async() => await this.postCreate(faker.lorem.sentence(), faker.lorem.paragraph()))(),
      (async() => await this.postCreate(faker.lorem.sentence(), faker.lorem.paragraph()))(),
      (async() => await this.postCreate(faker.lorem.sentence(), faker.lorem.paragraph()))()
    ]);
  }

  seed = async () => {
    this.posts = await Post.estimatedDocumentCount().exec().then(async (count) => {
      if(count === 0) {
        await this.createPosts();
      }
      return await Post.find().exec();
    });  
  }

}
export default Seeder;