import React from 'react'
import { Heading } from '../common/Heading'
import { SliderComponent } from '../common/Slider/Slider'

export const PopularDestination = () => {
  return (
    <div className="bg-primary  mt-[-20%] lg:mt-[-4%] rounded-[52px] py-20">
      <Heading className="text-center">
        recommended <span className="text-secondary">Popular</span>
        <br /> destinations
      </Heading>
      <SliderComponent />
    </div>
  )
}
