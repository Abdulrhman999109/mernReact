import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import Navbar from './component/Navbar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="page">
          <Routes>
            <Route path='/'
            element={<Home/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
