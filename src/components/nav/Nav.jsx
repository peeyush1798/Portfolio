import React from 'react'
import './Nav.css';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {TfiBookmarkAlt} from 'react-icons/tfi'
import {RiServiceLine} from 'react-icons/ri'
import {LuMessagesSquare} from 'react-icons/lu'

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><TfiBookmarkAlt/></a>
      <a href="#testimonials"><RiServiceLine/></a>
      <a href="#contact"><LuMessagesSquare/></a>
    </nav>
  )
}

export default Nav