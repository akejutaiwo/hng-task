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
        {link.map((item, index) => (
        <button className="link" key={index}>
            <a id='' href={item.link}>{item.name}</a>
        </button>
        ))}
        <div  className="social">
          <IconContext.Provider value={{ color: 'skyBlue', size: 30 , width: '2px'}} >
            <a href='/http://slack.com/akejutaiwo2019' className="disabledCursor" onClick={ (event) => event.preventDefault()}>
              <FaSlack />
            </a>
            <a 
            href='https://twitter.com/Akeju_TO'>
              <FaTwitter />
            </a>
           </IconContext.Provider>
        </div>

    </div>
  )
}

export default HomePage