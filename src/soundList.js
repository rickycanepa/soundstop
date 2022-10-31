const SoundList = (props) => {
    const sounds = props.sounds
    return (
        <div className="sound-list">
            {sounds.map((sound) => (
                <div className="sound-preview" key={ sounds.id }>
                    <h3>{ sound.songTitle }</h3>
                    <p>Produced by: { sound.artist }</p>
                    <p>Genre: { sound.genre }</p>
                    <p>Key: { sound.key }</p>
                    <p>BPM: { sound.bpm }</p>
                </div>
                
            ))}
        </div>
      );
}
 
export default SoundList;