import React from 'react'

const Description = ({ content,myClass}) => {
  return (
      <p className={` text-black ${myClass}`}>{ content}</p>
  )
}

export default Description
