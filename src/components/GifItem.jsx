import React from 'react'

export const GifItem = ({ title, url }) => {
  return (
    <div className='card'>
        <img src={url} alt="imagen de anime" />
        <p>{ title }</p>
    </div>
  )
}
