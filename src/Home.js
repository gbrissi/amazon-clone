import React from 'react'
import './Home.css';
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div>
                <img className='home_image' src='https://images-na.ssl-images-amazon.com/images/G/32/kindle/devices/2021/Alexa/GW/Maio/W18/Echo/DesktopHero_EchoImageMapping_3000x1200._CB664871544_.jpg' alt=''
                />
                <div className='home_row'>
                    <Product/> 
                    <Product/>
                </div>
                <div className='home_row'>
                    <Product/> 
                    <Product/>
                    <Product/>
                </div>
                <div className='home_row'>
                    <Product/>  
                </div>
            </div>
        </div>
    )
}

export default Home
