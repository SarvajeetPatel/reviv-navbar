import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './navbar/NavBar';
import VitaminShots from './pages/VitaminShots';
import IVDripTherapy from './pages/IVDripTherapy';
import IVServices from './pages/IVServices';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' exact element={<NavBar />} >
          <Route path='iv-drip-therapy' element={<IVDripTherapy />} >
            <Route path='*' element={<IVServices />} />
          </Route>
          <Route path='/vitamin-shots' element={<VitaminShots />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
