import React from 'react'
import './HomePage.css'
import profile from '../img/akeju.jpeg'
import { FaSlack, FaTwitter, FaShare, FaEllipsisH } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import {link } from './linkPage'


const HomePage = () => {

  return (
    <div className="HomePage">
        <div className='profile_img'>
            <button className='btn' >
                <FaEllipsisH />
            </button>
            <img src={profile} alt="alt" />
            <FaShare className='share'/>
            
            <span>
                Taiwo Akeju
            </span>
            
            
        </div>
        

    </div>
  )
}

export default HomePage