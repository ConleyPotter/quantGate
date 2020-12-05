import { Meteor } from 'meteor/meteor';
import { BlogPostsCollection } from '/imports/api/BlogPostsCollection';
var contentful = require('contentful');
import contentfulKeys from '../config/contentful_keys';

var client = contentful.createClient({
  space: contentfulKeys.spaceId,
  accessToken: contentfulKeys.accessToken,
});

// const getHeroImageSrc = (id) => {
//   client.getAsset(id)
//     .then(asset => {
//       return asset.fields.file.url
//     })
//     .catch(err => console.log(err))
// }

const insertBlogPost =  (blogPost, heroImageSrc) => {
  if (!BlogPostsCollection.findOne({ title: blogPost.fields.title })) {
    BlogPostsCollection.insert({
      title: blogPost.fields.title,
      author: blogPost.fields.author,
      heroImageSrc: heroImageSrc,
    });
  }
}

client.getEntries({
  "content_type": "blogPost",
})
.then(function (entries) {
  Meteor.startup(() => {
      entries.items.forEach(function (entry) {
        if(entry.fields.title) {
          const heroImageSrc = entry.fields.heroImage.fields.file.url;
          insertBlogPost(entry, heroImageSrc);
        }
      });
  });
});
