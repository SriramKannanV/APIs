import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

import { AiFillLike } from "react-icons/ai";

const Comments = () => {

  let url = "https://dummyjson.com/comments";

  const [comment, setComment] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        setComment(data.comments)

        console.log(data.comments);
  })
  }, [])

  return (
    <div>
      <Navbar />

      <div className='container p-bottom px-3 px-md-0'>
        <h4 className='fw-bold my-4' >Comments</h4>

      {comment.length === 0 ? (<p>Loading Comments...</p>) : (
        // <div>

          comment.map((item => {
            return (
              <div className='mb-3' key={item.id}>
                <div className='d-flex gap-2'>
                  <h6 className='fw-bolder'>{item.user.username}</h6>
                  <p className='fst-italic fs-7 mb-0'>({item.postId})</p>
                </div>
                <p className='mb-3'>{item.body}</p>
                <div className='d-flex gap-1'>
                  <AiFillLike className='fs-5'/>
                  <p className='fw-bolder mb-0'>{item.likes}</p>
                </div>
              </div>
            )
          }))

        // </div>
      )}

      </div>

      <Footer />
    </div>
  )
}

export default Comments
