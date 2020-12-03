import React from 'react';
import { BlogPost } from './BlogPost';
import { BlogPostsCollection } from "/imports/api/TasksCollection"

const blogPosts = {};

export const App = () => (
  <div>
        <h1>Welcome to QuantGate!</h1>
 
        <ul>
          { blogPosts.map(blogPost => <BlogPost key={ blogPost._id } blogPost={ blogPost }/>) }
        </ul>
  </div>
);
