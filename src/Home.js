import { useState } from 'react'

const Home = () => {
    const [sounds, setSounds] = useState([
        { title: 'Synth Heaven', genre: 'Dance', bpm: 165, key: "C#m", artist: "Mike Dean", id: 1, userId: 1 },
        { title: 'Dystopia', genre: 'Hip hop', bpm: 120, key: "D", artist: "Crankbeats", id: 2, userId: 2 },
        { title: 'Block Gate', genre: 'Ambient', bpm: 65, key: "B", artist: "Brian Eno", id: 3, userId: 3 }
    ])
    return ( 
        <div className="home">
            <div className = "sounds">
                <h2>Sounds</h2>
            </div>
            {sounds.map((sound) => (
                <div className="sound-preview" key={ sounds.id }>
                    <h2>{ sound.title }</h2>
                    <p>Produced by: { sound.artist }</p>
                    <p>Genre: { sound.genre }</p>
                    <p>Key: { sound.key }</p>
                    <p>BPM: { sound.bpm }</p>
                </div>
                
            ))}
        </div>
     );
}
 
export default Home;