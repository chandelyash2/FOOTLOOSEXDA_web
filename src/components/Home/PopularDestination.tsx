import React from 'react'
import { Heading } from '../common/Heading'
import { SliderComponent } from '../common/Slider/Slider'

export const PopularDestination = () => {
  return (
    <div className="bg-primary  mt-[-180px] lg:mt-[-240px] rounded-[52px] py-20">
      <Heading className="text-center">
        recommended <span className="text-secondary">Popular</span>
        <br /> destinations
      </Heading>
      <SliderComponent />
    </div>
  )
}
