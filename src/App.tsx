import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SharedSong from './components/SharedSong';
import { PlaybackProvider } from './contexts/PlaybackContext';

function App() {
  return (
    <PlaybackProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/share/:type/:id" element={<SharedSong />} />
        </Routes>
      </BrowserRouter>
    </PlaybackProvider>
  )
}

export default App
