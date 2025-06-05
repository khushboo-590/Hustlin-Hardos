import React from 'react'

const Discripition = ({ content,myClass}) => {
  return (
      <p className={`text-lg leading-[150%] text-black ${myClass}`}>{ content}</p>
  )
}

export default Discripition
