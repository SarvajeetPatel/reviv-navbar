import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './navbar/NavBar';
import VitaminShots from './pages/VitaminShots';
import IVDripTherapy from './pages/IVDripTherapy';
import IVServices from './pages/IVServices';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' exact element={<NavBar />} >
          <Route path='iv-drip-therapy' element={<IVDripTherapy />} />
          <Route path='iv-drip-therapy'>
            <Route path=':id' element={<IVServices />} />
          </Route>
          <Route path='vitamin-shots' element={<VitaminShots />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
