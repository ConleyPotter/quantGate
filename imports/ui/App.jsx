import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { BlogPost } from './BlogPost';
import { BlogPostsCollection } from "/imports/api/BlogPostsCollection"

export const App = () => {
  const blogPosts = useTracker(() => BlogPostsCollection.find({}, { sort: { createdAt: -1 } }).fetch());

  return (
    <div>
          <h1>Welcome to QuantGate!</h1>
  
          <ul>
            { blogPosts.map(blogPost => <BlogPost key={ blogPost._id } blogPost={ blogPost }/>) }
          </ul>
    </div>
  )
};
