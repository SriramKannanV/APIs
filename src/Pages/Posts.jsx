import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

import { PiEyesBold } from "react-icons/pi"
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { useEffect, useState } from 'react';

const Posts = () => {

  let url = "https://dummyjson.com/posts";

  const [posts, setPosts] = useState([]);
  const [img, setImg] = useState("")

  // useEffect(() => {
    
  // }, [])

  useEffect(() =>{
    const fetchData = async () => {
      try {
        const postRes = await fetch(url);
        const postData = await postRes.json();
        await setPosts(postData.posts);

        const imgRes = await fetch("https://picsum.photos/200");
        await setImg(imgRes.url);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [])

  return (
    <div>
      <Navbar/>

      <div className='px-1 px-md-0'>
      <h4 className='container fw-bold my-4'>Posts</h4>
        <div className='container my-4 d-flex flex-wrap gap-5 p-bottom'>

            {posts.length === 0 ? (<p>Loding Posts...</p>) : (
              posts.map((post) => {
              return (<div key={post.id} className='post rounded p-3 shadow'>
              <div>
                <h5 className='mb-0 fw-bolder'>{post.title.length > 28 ? `${post.title.substring(1, 28)}...` : post.title}</h5>
                <p className='post-disc'>{post.body.length > 75 ? `${post.body.substring(0, 75)}...` : post.body}</p>
              </div>
              <div className='post-img rounded overflow-hidden'>
                {img === "" ? (<p className='text-black p-2'>Loading Image...</p>) : (<img className='w-100 h-100' alt="posts" src={img} />)}
              </div>
              <div className='d-flex my-2 gap-5'>
                <div className='d-flex gap-1'>
                  <PiEyesBold className='h-100 align-center fs-4'/>
                  <p className='mb-0 fw-bold h-100 align-center'>{post.views}</p>
                </div>
                <div className='d-flex gap-1'>
                  <AiFillLike className='h-100 align-center fs-4'/>
                  <p className='mb-0 fw-bold'>{post.reactions.likes}</p>
                </div>
                <div className='d-flex gap-1'>
                  <AiFillDislike className='h-100 align-center fs-4'/>
                  <p className='mb-0 fw-bold'>{post.reactions.dislikes}</p>
                </div>
              </div>
              <div className='d-flex post-tags'>
                {post.tags.map((tag, index) => {
                  return <p key={index} className='mb-0 pr'>#{tag}</p>
                })}
              </div>
            </div>)
            })
            )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Posts
