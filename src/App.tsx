import { Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import MethodePage from '@/pages/MethodePage';
import CasClientsPage from '@/pages/CasClientsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/methode" element={<MethodePage />} />
      <Route path="/cas-clients" element={<CasClientsPage />} />
    </Routes>
  )
}

export default App
