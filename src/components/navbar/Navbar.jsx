import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='d-flex justify-content-center gap-5 align-items-center bg-black  ' style={{height:'50px'}}>
            <div className="logo mt-2 ">
                <h5 className='text-info '>REGISTOR</h5>
            </div>
            <div className="navcont d-flex gap-2 ">
                <Link to={'/'} className='text-white'>Registor</Link>
                <Link to={'/registrationtemplate'}className='text-white'>userRegistor</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
