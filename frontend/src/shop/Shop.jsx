import React from 'react'
import PageHeader from '../components/PageHeader'
import HomeCategory from '../home/HomeCategory'

const Shop = () => {
  return (
    <div>
        <PageHeader title='Shop Page' curPage='Shop' backgroundImage='src/assets/images/pageheader/shop-header.jpg' />
        <HomeCategory/>
    </div>
  )
}

export default Shop