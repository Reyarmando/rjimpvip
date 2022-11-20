import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './components/Contexts/authContext';
import { Home } from './components/Home';
import Consultas from './components/Consultas';
import Tiket from './components/tiket';

function App() {

  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/consultas' element={<Consultas />}>
            </Route>
            <Route path='/tiket' element={<Tiket />}>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
