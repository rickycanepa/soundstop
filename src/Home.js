import { useState } from 'react'
import SoundList from './soundList';


const Home = () => {
    const [sounds, setSounds] = useState([
        { title: 'Synth Heaven', genre: 'Dance', bpm: 165, key: "C#m", artist: "Mike Dean", id: 1, userId: 1 },
        { title: 'Dystopia', genre: 'Hip hop', bpm: 120, key: "D", artist: "Crankbeats", id: 2, userId: 2 },
        { title: 'Block Gate', genre: 'Ambient', bpm: 65, key: "B", artist: "Brian Eno", id: 3, userId: 3 }
    ])
    return ( 
        <div className="home">
            <SoundList sounds={ sounds } />
            
        </div>
     );
}
 
export default Home;