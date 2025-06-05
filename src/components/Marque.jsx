import React from 'react'
import { marquetData } from '../utils/helper.'

const Marque = () => {
  return (
      <div className='bg-[#000000] max-w-[1920px] mx-auto'>
          <section className="bg-black py-[13.5px] max-md:py-2.5 max-sm:py-2">
              <div className="flex max-w-[1920px] mx-auto overflow-hidden">
                  <div className="slide-scroll flex gap-[62px] max-md:gap-14 animate-scroll">
                      {marquetData.map((obj, index) => (
                          <div key={index} className="flex items-center gap-[7px]">
                              <p className="text-white whitespace-nowrap">{obj.name}</p>
                              <p
                                  className={`
                  text-${obj.color}
                  border border-${obj.color}
                  p-0.5 rounded-[5px] border-solid
                `}
                              >
                                  {obj.change}
                              </p>
                          </div>
                      ))}
                  </div>
              </div>
          </section>
    </div>
  )
}

export default Marque


