import React from 'react'

import './Style.css'
import { useNavigate } from 'react-router-dom'

export default function Header(props) {
    const nav = useNavigate()
  return (
    <div id='header' >
        <img src={props.Slogo} alt="" style={{width:'100px',marginLeft:'20px'}}/>
        <button className='buttons' onClick={()=>{nav('/Homepage')}}>Homepage</button>
        <button className='buttons' onClick={()=>{nav('/Projects')}}>Projects</button>
        <button className='buttons' onClick={()=>{nav('/Contact')}}>Contact_information</button>
        <button className='buttons' onClick={()=>{nav('/About')}}>About</button>

    </div>
  )
}
