import React, {useState} from 'react'
import Banner from './Banner'
import Features from './Features'
import HomeCategory from './HomeCategory'
import Register from './Register'
import LocationSpread from './LocationSpread'



const Home = () => {
  return (
    <div>
        <Banner/>
        <Features/>
        <HomeCategory/>
        <Register/>
        <LocationSpread/>
    </div>
  )
}

export default Home