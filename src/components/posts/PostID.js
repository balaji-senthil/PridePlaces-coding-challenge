import React from 'react'

const PostID = ({ post }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          Hover to open, <h1>Post ID #{post.id}</h1>
        </div>
        <div className='card-back'>
          <h1>{post.name}</h1>
          <ul>
            <li>
              <strong>Post title:</strong> {post.title}
            </li>
            <li>
              <strong>Post body:</strong> {post.body}
            </li>
            <li>
              <strong>userID:</strong> {post.userId}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PostID
