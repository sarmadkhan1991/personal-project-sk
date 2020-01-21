import React from 'react';
import Background from '../../images/Background.jpg';
import './Home.css'


function Home () {
    return (
        <div>
            <img src={Background} alt='background' className='Home-img'/> 
        </div>
    )
}

export default Home;