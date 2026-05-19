import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='nav sticky-top navbar navbar-expand-md'>
      <div className='container'>
          <Link to="/" className='fw-bold mb-0 link fs-3'>[ API ] Placeholder</Link>
          <button className="navbar-toggler shadow-none border-0" type="button" data-bs-theme="dark" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon toggle-btn"></span>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className='d-flex gap-md-5 mb-0 navbar-nav flex-column flex-md-row gap-3 gap-md-5 ms-auto'>
              <li><Link to="/" className='link mb-0 text-dec-none nav-items'>Home</Link></li>
              <li><Link to="/posts" className='link mb-0 text-dec-none nav-items'>Posts</Link></li>
              <li><Link to="/comments" className='link mb-0 text-dec-none nav-items'>Comments</Link></li>
              <li><Link to="/todos" className='link mb-0 text-dec-none nav-items'>Todos</Link></li>
              <li><Link to="/users" className='link mb-0 text-dec-none nav-items'>Users</Link></li>
            </ul>
          </div>
      </div> 
    </nav>
  )
}

export default Navbar
