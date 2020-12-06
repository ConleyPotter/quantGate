import { Meteor } from 'meteor/meteor';
import { BlogPostsCollection } from '/imports/api/BlogPostsCollection';
import { Accounts } from 'meteor/accounts-base';
var contentful = require('contentful');
import contentfulKeys from '../config/contentful_keys';

var client = contentful.createClient({
  space: contentfulKeys.spaceId,
  accessToken: contentfulKeys.accessToken,
});

const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

const insertBlogPost =  (blogPost, heroImageSrc) => {
  if (!BlogPostsCollection.findOne({ title: blogPost.fields.title })) {
    BlogPostsCollection.insert({
      title: blogPost.fields.title,
      author: blogPost.fields.author,
      heroImageSrc: heroImageSrc,
      createdAt: new Date(),
    });
  }
}

client.getEntries({
  "content_type": "blogPost",
})
.then(function (entries) {
  Meteor.startup(() => {
    if (!Accounts.findUserByUsername(SEED_USERNAME)) {
      Accounts.createUser({
        username: SEED_USERNAME,
        password: SEED_PASSWORD,
      })
    }
    entries.items.forEach(function (entry) {
      if(entry.fields.title) {
        const heroImageSrc = entry.fields.heroImage.fields.file.url;
        insertBlogPost(entry, heroImageSrc);
      }
    });
  });
});
