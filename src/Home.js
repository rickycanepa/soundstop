import { useState, useEffect } from 'react'
import SoundList from './soundList';


const Home = () => {
    const [sounds, setSounds] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8088/instrumentals')
        .then(res => {
            return res.json();
        })
        .then((data) => {
            setSounds(data)
        })
    }, [])
    return ( 
        <div className="home">
            <SoundList sounds={ sounds } />
            
        </div>
     );
}
 
export default Home;