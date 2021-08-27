import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PridePlacesHeader from '../components/header/PridePlacesHeader'
import PostsGrid from '../components/posts/PostsGrid'

const App = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
     
      const postData = await axios(
   "https://jsonplaceholder.typicode.com/posts")

      console.log(postData.data)
      setPosts(postData.data)
    }

    fetchPosts()
  }, [])

  return (
    <div className='container'>
     <PridePlacesHeader/>
     <PostsGrid posts={posts} />
     </div>
  )
}

export default App
