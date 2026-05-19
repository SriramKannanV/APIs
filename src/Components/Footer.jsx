import { Link } from 'react-router-dom'

const footer = () => {
  return (
    <div className='footer pt-3 fixed-bottom d-none d-md-block'>
      <div className='container'>
        <div className='d-flex justify-content-between row'>
          <div className='col-sm col-lg-4'>
            <p className='fw-bolder'>Menu --</p>
            <div className='d-flex gap-lg-5 row'>
              <div className='d-flex flex-column col-lg'>
                <Link to="/" className='mb-1 link'>Home</Link>
                <Link to="/posts" className='link'>Posts</Link>
              </div>
              <div className='d-flex flex-column col-lg'>
                <Link to="/comments" className='mb-1 link'>Comments</Link>
                <Link to="/todos" className='link'>Todos</Link>
              </div>
              <div className='col-lg'>
                <Link to="/users" className='link'>Users</Link>
              </div>
            </div>
          </div>
          
          <div className='col-md col-lg-3 my-3 my-md-0'>
            <p className='fw-bolder'>Useful Links --</p>
            <div>
              <p className='mb-1 link'>Contact Me</p>
              <p className='link'>Portfolio</p>
            </div>
          </div>
          
          <div className='col-sm col-lg-3'>
            <p className='fw-bolder'>Socials --</p>
            <div>
              <p className='mb-1 link'><a className='link' href='https://www.linkedin.com/in/sriram-kannan-v-11jan2005' target='_blank'>LinkedIn</a></p>
              <p className='link'><a className='link' href='https://github.com/SriramKannanV' target='_blank'>GitHub</a></p>
            </div>
          </div>
        </div>
      </div>

      <div className='rights py-3'>
        <p className='text-center fw-bolder mb-0'>© Copyright Sriram Kannan V</p>
      </div>
    </div>
  )
}

export default footer
