import React from 'react'
import TopSeller from './components/TopSeller'
import Category from './components/Category'
import Feature from './components/Feature'
import Best from './components/Best'
import Countdown from './components/Countdown'
import Review from './components/Review'
import Brand from './components/Brand'

export default function Home() {
    return (
        <>
            <Category />
            <Feature />
            <Best />
            <TopSeller />
            <Countdown />
            <Review />
            <Brand />
        </>
    )
}
