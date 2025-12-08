import React from 'react'
import MainBanner from '../Component/MainBanner'
import Categories from '../Component/Categories'
import BestSeller from '../Component/BestSeller'
import BottomBannner from '../Component/BottomBannner'
import NewLetter from '../Component/NewLetter'
import Footer from '../Component/Footer'

const Home = () => {
  return (
    <div className='mt-10'>
      <MainBanner/>
      <Categories/>
      <BestSeller/>
      <BottomBannner/>
      <NewLetter/>
    </div>
  )
}

export default Home
