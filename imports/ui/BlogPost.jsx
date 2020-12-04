import React from 'react';
var contentful = require('contentful');
import contentfulKeys from '../../config/contentful_keys';

var client = contentful.createClient({
  space: contentfulKeys.spaceId,
  accessToken: contentfulKeys.accessToken,
});

const getHeroImageSrc = (id) => {
  client.getAsset(id)
    .then(asset => asset.fields.file.url)
}

export const BlogPost = ({ blogPost }) => {
  return (
    <li>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img src={getHeroImageSrc(blogPost.heroImage.sys.id)} />
        </div>
        <h1>{blogPost.title}</h1>
        <h4 className="">{blogPost.author.fields.name}</h4>
      </div>
    </li>
  )
};