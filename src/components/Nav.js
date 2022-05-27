import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Nav = () => {
  return (
    <div className='container'>
    <Link to='/' className='home'>HOME</Link>
    <Link to='/student' className='stud'>STUDENT</Link>
    <Link to='/contact' className='cont'>CONTACT</Link>
    </div>
  )
}

export default Nav