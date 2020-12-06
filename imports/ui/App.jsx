import React, { Fragment } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { BlogPost } from './BlogPost';
import { BlogPostsCollection } from "/imports/api/BlogPostsCollection"
import { LoginForm } from './LoginForm';

export const App = () => {
  const user = useTracker(() => Meteor.user());
  const blogPosts = useTracker(() => BlogPostsCollection.find({}, { sort: { createdAt: -1 } }).fetch());
  const logout = () => Meteor.logout();
  
  return (
    <div>
          <h1>Welcome to QuantGate!</h1>
          {user ? (
            <Fragment>
              <div className="user" onClick={logout}>
                {user.username} 🚪
              </div>
            </Fragment>
          ) : (
            <LoginForm />
          )}
          <ul>
            { blogPosts.map(blogPost => <BlogPost key={ blogPost._id } blogPost={ blogPost }/>) }
          </ul>
    </div>
  )
};
