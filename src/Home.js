import { useState, useEffect } from 'react'
import useFetch from './fetch';
import SoundList from './soundList';


const Home = () => {
    const { data: sounds, loading } = useFetch('http://localhost:8088/instrumentals')  
    return ( 
        <div className="home">
            { loading && <div>Loading...</div>}
            <SoundList sounds={ sounds } />
            
        </div>
     );
}
 
export default Home;