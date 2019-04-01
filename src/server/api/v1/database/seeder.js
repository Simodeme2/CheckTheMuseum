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

  postCreate = async (title, synopsis, body) => {
    const postDetail = {
      title: title,
      synopsis: synopsis,
      body: body
    };
    const post = new Post(postDetail);
    
    try {
      const newPost = await post.save();
      this.posts.push(newPost);

      console.log(`Post create with id: ${ newPost.id }!`);
    } catch(err) {
      console.log(`Post create with id: ${ err }!`);
    }
  }

  createPosts = async () => {
    await Promise.all([
      (async() => await this.postCreate(faker.lorem.sentence(), faker.lorem.paragraph(), `<p>${faker.lorem.paragraphs(10, '</p></p>')}</p>`))(),
      (async() => await this.postCreate(faker.lorem.sentence(), faker.lorem.paragraph(), `<p>${faker.lorem.paragraphs(10, '</p></p>')}</p>`))(),
      (async() => await this.postCreate(faker.lorem.sentence(), faker.lorem.paragraph(), `<p>${faker.lorem.paragraphs(10, '</p></p>')}</p>`))(),
      (async() => await this.postCreate(faker.lorem.sentence(), faker.lorem.paragraph(), `<p>${faker.lorem.paragraphs(10, '</p></p>')}</p>`))(),
      (async() => await this.postCreate(faker.lorem.sentence(), faker.lorem.paragraph(), `<p>${faker.lorem.paragraphs(10, '</p></p>')}</p>`))(),
      (async() => await this.postCreate(faker.lorem.sentence(), faker.lorem.paragraph(), `<p>${faker.lorem.paragraphs(10, '</p></p>')}</p>`))(),
      (async() => await this.postCreate(faker.lorem.sentence(), faker.lorem.paragraph(), `<p>${faker.lorem.paragraphs(10, '</p></p>')}</p>`))(),
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