
import React from 'react'
import Cataegories from '../../components/Cataegories/Cataegories'
import Contact from '../../components/Contact/Contact'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'
import './home.scss'

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProducts platform="browser" />
      <Cataegories />
      <FeaturedProducts platform="pc" />
      <Contact />
    </div>
  )
}

export default Home
