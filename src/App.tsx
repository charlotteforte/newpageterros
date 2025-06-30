import { Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import MethodePage from '@/pages/MethodePage';
import CasClientsPage from '@/pages/CasClientsPage';
import AgencePage from '@/pages/AgencePage';
import IntegrationPage from '@/pages/IntegrationPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/methode" element={<MethodePage />} />
      <Route path="/cas-clients" element={<CasClientsPage />} />
      <Route path="/agence" element={<AgencePage />} />
      <Route path="/integration" element={<IntegrationPage />} />
    </Routes>
  )
}

export default App
