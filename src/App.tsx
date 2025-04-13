import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
//import SharedSong from './components/SharedSong';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/share/:type/:id" element={<SharedSong />} /> */}
      </Routes>
    </BrowserRouter>

  )
}

export default App
