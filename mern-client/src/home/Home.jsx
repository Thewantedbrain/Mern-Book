import React from 'react'
import Banner from '../componenets/Banner'
import BestBookSeller from './BestBookSeller'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'

const Home = () => {
  return (
    <div>
     <Banner/>
     <BestBookSeller/>
     <FavBook/>
     <PromoBanner/>
     <OtherBooks/>
     <Review/>
    </div>
  )
}

export default Home