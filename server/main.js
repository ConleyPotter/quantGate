import { Meteor } from 'meteor/meteor';
import { BlogPostsCollection } from '/imports/api/BlogPostsCollection';
var contentful = require('contentful');

/* global Assets */
import dotenv from 'dotenv';
dotenv.config({
  path: Assets.absoluteFilePath('.env'),
});

const insertBlogPost = blogPostTitle => BlogPostsCollection.insert({ title: blogPostTitle });
 
Meteor.startup(() => {
  if (BlogPostsCollection.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task'
    ].forEach(insertBlogPost)
  }
});
