import React from 'react'


export default function projectlist(props) {
  return (
    <div className='projectdiv' >
        <br />
        <img src={props.val.image} alt="" style={{height:'150px',marginTop:'30px',marginRight:'100%'}}/>
        <p style={{backgroundColor:'aqua'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic perferendis sit dignissimos, eius placeat distinctio ea qui voluptatum eaque assumenda non quisquam exercitationem voluptates pariatur doloremque laboriosam suscipit explicabo delectus.</p>
    </div>
  )
}
