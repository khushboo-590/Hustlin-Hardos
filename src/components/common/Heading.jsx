import React from 'react'

const Heading = ({title,myClass}) => {
  return (
    <div>
          <h1 className={`text-[#000000] ${myClass}`}>{ title}</h1>
    </div>
  )
}

export default Heading
