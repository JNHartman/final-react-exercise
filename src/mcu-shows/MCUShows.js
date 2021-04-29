// Final React Exercise

// 1a'
import './MCUShows.css'

// 6a
import { useState } from 'react'

// 1b & 5c & 6f
const MCUShows = ({ dates, randomAvenger }) => {
    // 1c
    return (
        // 4a
        <div className='MCUShows'>
            {/* 3a */}
            <h1 style={{ fontFamily: 'Georgia', textDecoration: 'underline' }}>Disney+</h1>
            <h2>MCU Show Release Dates</h2>
            {/* 5c */}
            <p>WandaVision: {dates.wandaVision}</p>
            <p>The Falcon and the Winter Soldier: {dates.falconWinter}</p>
            <p>Loki: {dates.loki}</p>
            <p>Hawkeye: {dates.hawkeye}</p>
            {/* 6e & 6f */}
            <button onClick={randomAvenger}>RANDOM AVENGER</button>
            {/* 7c */}
            <button>NEXT AVENGER</button>
        </div>
    );
}

// 1d
export default MCUShows;