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
                    <Product 
                        title='Smart Lâmpada Led Colors' image='https://images-na.ssl-images-amazon.com/images/I/61bWZkW8UsL._AC_UL160_SR160,160_.jpg' 
                        rating={5} 
                        price='19.90'
                    /> 
                    <Product 
                        title='Pelicula Novo Kindle 10a Geração' image='https://images-na.ssl-images-amazon.com/images/I/71HoGLqdPYL._AC_UL160_SR160,160_.jpg'
                        rating={4} 
                        price='32.00'
                    /> 
                </div>
                <div className='home_row'>
                    <Product 
                        title='Controle Universal Inteligente Infravermelho' image='https://images-na.ssl-images-amazon.com/images/I/51o7CVg47tL._AC_UL160_SR160,160_.jpg' 
                        rating={5} 
                        price='119.90'
                    /> 
                    <Product 
                        title='Teclado Gamer RGB HyperX' image='https://images-na.ssl-images-amazon.com/images/I/61au1sF-vNL._AC_UL160_SR160,160_.jpg'
                        rating={5} 
                        price='234.90'
                    /> 
                    <Product 
                        title='MousePad Speed FORTREK' image='https://images-na.ssl-images-amazon.com/images/I/31AVfnlYKYL._AC_UL160_SR160,160_.jpg' 
                        rating={5} 
                        price='24.90'
                    /> 
                </div>
                <div className='home_row'>
                    <Product 
                        title='Box Sherlock Holmes' image='https://images-na.ssl-images-amazon.com/images/I/714X4gjNs6L._AC_UL160_SR160,160_.jpg' 
                        rating={5} 
                        price='67.90'
                    />   
                </div>
            </div>
        </div>
    )
}

export default Home
