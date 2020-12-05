import React from 'react';

export const BlogPost = ({ blogPost }) => {
  return (
    <li>
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 m-12">
        <div className="md:flex">
          <div className="space-y-0.5">
            <div className="py-4 px-4 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
              <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src={blogPost.author.fields.image.fields.file.url} alt={blogPost.author.fields.name + "-profile-picture"} />
              <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                  <p className="text-lg text-black font-semibold">
                    {blogPost.author.fields.name}
                  </p>
                  <p className="text-gray-500 font-medium">
                    {blogPost.author.fields.title}
                  </p>
                </div>
                <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
              </div>
            </div>
          </div>
          <div className="text-center md:w-44 py-12">
            <p>{blogPost.title}</p>
          </div>
          <div className="flex-shrink-0 bottom-0 right-0">
            <img className="h-32 w-32" src={blogPost.heroImageSrc} alt={blogPost.title.trim() + "-hero-image"} />
          </div>
        </div>
      </div>
    </li>
  )
};