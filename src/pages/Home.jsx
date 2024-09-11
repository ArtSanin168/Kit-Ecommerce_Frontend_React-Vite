import React from 'react'
import Hero from '../components/Hero'
import LastestCollection from '../components/LastestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'

const Home = () => {
  return (
    <div>
       <Hero />
       <LastestCollection />
       <BestSeller/>
       <OurPolicy/>
       <NewsLetterBox/> 
    </div>
  )
}

export default Home