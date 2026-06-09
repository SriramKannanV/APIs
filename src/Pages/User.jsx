import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const User = () => {

  const [user, setUser] = useState([]);

  let url = "https://dummyjson.com/users";

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setUser(data.users))
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <Navbar />

      <div className='container px-3 px-md-0'>
        <h4 className='fw-bold my-4'>User</h4>

        <div className='d-flex flex-wrap gap-5 p-bottom mb-5'>

          {user.length === 0 ? <p>Loading Users...</p> : (
            user.map((item => {
              return (
              <div key={item.id}>
                <div className='user rounded text-center py-3 shadow'>
                  <div className='user-dp align-center mx-auto'>
                    <img alt="dp" className='h-100 w-100 p-2' src={item.image} />
                  </div>
                  <div className='mt-2'>
                    <p className='mb-0 fw-bolder'>{item.firstName}</p>
                    <p className='mb-2'>{item.company.title}</p>
                    <p className='mb-5'>{item.address.city + ", " + item.address.state}</p>
                  </div>
                  <div className='text-start px-4'>
                    <p className='mb-0 fw-normal'><span className='fw-bolder'>Mail: </span>{item.email.length > 22 ? `${item.email.substring(1, 22)}` : ''}</p>
                    <p className='mb-0 fw-normal'><span className='fw-bolder'>Phone: </span>{item.phone}</p>
                  </div>
                </div>
              </div>
            )})
          ))}

          </div>

      </div>

      <Footer />
    </div>
  )
}

export default User
