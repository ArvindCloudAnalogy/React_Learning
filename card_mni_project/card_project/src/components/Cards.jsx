import React from 'react'
import { Bookmark, Car } from 'lucide-react'



const Cards = (props) => {
  const logo = props.brandLogo ;
  return (
    <div className="card">

       <div>
         <div className="top">
          <img src={logo} alt="Logo"  />
          <button>
            Save <Bookmark size={12}  />
          </button>
        </div>

        <div className="center">
          <h3>{props.company} <span>{props.datePosted}</span></h3>
          <h2>{props.post}</h2>
          <div className='tag'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>

        </div>
       </div>

        <div className="bottom">
          <div className="bottom-info">
            <h3>{props.pay}</h3>
            <h3>{props.location}</h3>
          </div>
          <div className="bottom-action">
            <button>Apply Now</button>
          </div>
        </div>
      </div>
  )
}

export default Cards