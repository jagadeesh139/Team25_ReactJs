import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { MusicProvider } from "./components/MusicContext";
import TrackList from "./components/TrackList";
import PlayerControls from "./components/PlayerControls";
import AddEditTrackForm from "./components/Musicform";
// import "./styles.css"

function App() {
  const [count, setCount] = useState(0)

  return (<MusicProvider>
    <div className="app-container">
      <h1 className="app-title">🎵 Music Player with CRUD</h1>
      <AddEditTrackForm />
      <TrackList/>
      <PlayerControls/>
    </div>
  </MusicProvider>
);
}

export default App