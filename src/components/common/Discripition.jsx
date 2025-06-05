import React from 'react'

const Discripition = ({ content,myClass}) => {
  return (
      <p className={` text-black ${myClass}`}>{ content}</p>
  )
}

export default Discripition
