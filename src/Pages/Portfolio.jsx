import React from 'react'

export default function Portfolio(props) {
  return (

      // START - Blog Container
      <div className='container--port'>

        <div className='image--port--wrap'>
            <img src={`../images/${props.single.imgPort}`} />
        </div>
        <div className='content--port--wrap'>
            <h3 className='title--port'>{props.single.title}</h3>
            <p className='description--port'>{props.single.description}</p>
            <p className='tech--port'>{props.single.tech}</p>
        </div>
      </div>
  )
}
