import React from 'react'
import NavBar from '../Components/NavBar'
import SliderBanner from '../Components/SliderBanner'
import pic from "../Assets/Podcasting-stock-image-Shutterstock.jpg"
import SectionsHompage from '../Components/Sections_Hompage'
import CardSection from '../Components/Card'
import Footer from '../Components/Footer'
import transition from '../transition'

const HomePage = () => {
  return (
    <div>
        <div>
        <NavBar/>
        <SliderBanner/>
        <SectionsHompage/>
        <div className='card_header'>
                <h1>Most Read Articles</h1>
            </div>
        <CardSection/>
        </div>
{/* <img src={pic} alt="" /> */}
        {/* <Footer/> */}
        <Footer/>
    </div>
  )
}

export default transition(HomePage);