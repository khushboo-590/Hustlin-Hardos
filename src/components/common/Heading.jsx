import React from 'react'

const Heading = ({title,myClass}) => {
  return (
    <div>
      <h2 style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.4)" }} className={`text-[#000000] text-[80px] max-xl:text-6xl max-lg:text-5xl max-md:text-3xl leading-[104%] ${myClass}`}>{ title}</h2>
    </div>
  )
}

export default Heading
