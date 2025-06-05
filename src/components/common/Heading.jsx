import React from 'react'

const Heading = ({title,myClass}) => {
  return (
    <div>
          <h2 className={`text-[#000000] ${myClass}`}>{ title}</h2>
    </div>
  )
}

export default Heading
