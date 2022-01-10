import React from 'react'
import { Button } from 'react-bootstrap'
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='home-background'>
                <div className="home-gradient"></div>
                <div className="home-main">
                    <h1 className="home-title">Game Backlog</h1>
                    <p>For videogame lovers</p>
                    <Button variant="outline-dark">Sign In</Button>
                </div>
                <div className='home-banner'>
                    <div className="home-banner-text">  <h2 className='home-banner-title'>GameBack</h2>
                        <p className="home-banner-subtitle">Create your own video game backlog, register your own experience, rate and comment your favourite videogames.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
