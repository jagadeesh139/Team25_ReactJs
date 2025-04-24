import React, { useState, useEffect, useRef } from 'react';

const MusicPlayer = ({ currentSong, playlist, initialVolume = 0.5 }) => {
  const [volume, setVolume] = useState(initialVolume);
  const [isPlaying, setIsPlaying] = useState(false);
  const [repeatMode, setRepeatMode] = useState(false);
  const [shuffleMode, setShuffleMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    if (playlist.length === 0) return; // Avoid errors if playlist is empty

    audioRef.current.src = playlist[currentIndex].url;
    audioRef.current.volume = volume;
    audioRef.current.onloadedmetadata = () => {
      setTotalDuration(audioRef.current.duration);
    };
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentIndex, playlist, volume, isPlaying]);

  const play = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  const pause = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  const skip = (direction = 'next') => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % playlist.length;
    } else {
      newIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    }
    setCurrentIndex(newIndex);
  };

  const shuffle = () => {
    setShuffleMode(!shuffleMode);
    if (!shuffleMode) {
      const shuffled = [...playlist].sort(() => Math.random() - 0.5);
      // setPlaylist(shuffled); // assuming playlist state
    }
  };

  if (playlist.length === 0) {
    return <div>No songs in the playlist</div>; // Display a fallback message if playlist is empty
  }

  return (
    <div className="music-player">
      <h2>{playlist[currentIndex]?.title || 'No song selected'}</h2>
      <h3>{playlist[currentIndex]?.artist || 'Unknown Artist'}</h3>
      <p>{Math.floor(totalDuration / 60)}:{Math.floor(totalDuration % 60).toString().padStart(2, '0')}</p>
      <div>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
        <button onClick={() => skip('prev')}>Prev</button>
        <button onClick={() => skip('next')}>Next</button>
      </div>
      <div>
        <label>Volume</label>
        <input type="range" min="0" max="1" step="0.01" value={volume} onChange={e => setVolume(e.target.value)} />
      </div>
      <div>
        <button onClick={() => setRepeatMode(!repeatMode)}>{repeatMode ? 'Repeat On' : 'Repeat Off'}</button>
        <button onClick={shuffle}>{shuffleMode ? 'Shuffle On' : 'Shuffle Off'}</button>
      </div>
    </div>
  );
};

export default MusicPlayer;
