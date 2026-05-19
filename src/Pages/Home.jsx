import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const HomePage = () => {
  return (
    <div>
      <Navbar />

      {/* Main Section */}

      <div className='container my-5 px-5 px-md-0'>
        <div className='hero my-5'>
          <h1 className='fw-semibold mb-4'>[ API ] Placeholder</h1>
          <h4 className='fw-normal mb-5'>This project was build to enhance <br></br> my understanding on APIs</h4>
          <p className='fw-bolder'>Created by -- Sriram Kannan V</p>
        </div>

        <div className='w-100 d-flex flex-column align-items-center'>
          <h4 className='fw-bold fs-3 mb-4'>Resources</h4>
          <div className='row gap-sm-4'>
            <Link to="/posts" className='py-2 px-4 rounded shadow-sm mb-2 fw-bold button text-dec-none col-sm text-center'>Posts</Link>
            <Link to="/comments" className='py-2 px-4 rounded shadow-sm mb-2 fw-bold button text-dec-none col-sm text-center'>Comments</Link>
            <Link to="todos" className='py-2 px-4 rounded shadow-sm mb-2 fw-bold button text-dec-none col-sm text-center'>Todos</Link>
            <Link to="users" className='py-2 px-4 rounded shadow-sm mb-2 fw-bold button text-dec-none col-sm text-center'>Users</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default HomePage
