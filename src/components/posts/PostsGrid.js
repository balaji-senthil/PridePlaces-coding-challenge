import React from 'react'
import PostID from './PostID'


const PostsGrid = ({ posts }) => {
  return (
    <section className='cards'>
      {posts.map((post) => (
        <PostID key={post.char_id} post={post}></PostID>
      ))}
    </section>
  )
}

export default PostsGrid
