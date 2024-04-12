import React from 'react'

const Navbar = () => {
  return (
   <div className='mini-nav d-flex'>
    <marquee>
    <p className='marque'>Opening Hours: Mn-Fr: 10 am-8 pm</p>
    </marquee>
    <div className='icon'>
    <i className="fa fa-facebook-square" aria-hidden="true"></i>
    <i className="fa fa-twitter-square ml-3" aria-hidden="true"></i>
    <i className="fa fa-instagram ml-3" aria-hidden="true"></i>
    </div>
   </div>

  )
}

export default Navbar

