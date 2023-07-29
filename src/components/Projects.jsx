import React from 'react'
import Projectlist from './Projectlist'

export default function Projects(props) {
  return (
    <div>
        {props.projectlist.map((val,ind)=>{
            return <Projectlist key={ind} val={val} />
        })}
    </div>
  )
}
