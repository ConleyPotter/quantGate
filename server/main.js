import { Meteor } from 'meteor/meteor';
import { BlogPostsCollection } from '/imports/api/BlogPostsCollection';
var contentful = require('contentful');
import contentfulKeys from '../config/contentful_keys';

var client = contentful.createClient({
  space: contentfulKeys.spaceId,
  accessToken: contentfulKeys.accessToken,
});

const insertBlogPost = blogPost => {
  if (!BlogPostsCollection.findOne({ title: blogPost.fields.title })) {
    BlogPostsCollection.insert({ 
      title: blogPost.fields.title,
      author: blogPost.fields.author,
      heroImage: blogPost.fields.heroImage,
    });
  }
}

client.getEntries({
  "content_type": "blogPost",
})
.then(function (entries) {
  // log the title for all the entries that have it
  Meteor.startup(() => {
      entries.items.forEach(function (entry) {
        if(entry.fields.title) {
          insertBlogPost(entry);
        }
      });
  });
});
