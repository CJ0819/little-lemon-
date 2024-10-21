import React from 'react'
import './Home.css'
import background from '../../assets/background.jpeg'

const Home = () => {
    return (
        <div className='home'>
            <img src={background} alt='Background' />
            <div className='overlay'>
                <div className='black-box'>
                    <p>Welcome to Little Lemon Café, where freshness and flavor meet. Enjoy a cozy dining experience with us!</p>
                </div>
                <div className='center-text'>
                    <h1>Little Lemon</h1>
                    <h2>Open for delivery & Pickup</h2>
                </div>
                
                <div className='keybuttons'>
                    <button type='submit' className='Reserve'>Reserve a table</button>
                    <button type='submit' className='Specials'>See Specials</button>
                    </div>
            </div>
        </div>
    )
}

export default Home