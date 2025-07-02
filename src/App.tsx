import { Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import MethodePage from '@/pages/MethodePage';
import CasClientsPage from '@/pages/CasClientsPage';
import AgencePage from '@/pages/AgencePage';
import IntegrationPage from '@/pages/IntegrationPage';
import LeoPage from '@/pages/LeoPage';
import AiAgencyPage from '@/pages/AiAgencyPage';
import WebAgencyPage from '@/pages/WebAgencyPage';
import ScrapingAgencyPage from '@/pages/ScrapingAgencyPage';
import StrapiAgencyPage from '@/pages/StrapiAgencyPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/methode" element={<MethodePage />} />
      <Route path="/cas-clients" element={<CasClientsPage />} />
      <Route path="/agence" element={<AgencePage />} />
      <Route path="/integration" element={<IntegrationPage />} />
      <Route path="/leo" element={<LeoPage />} />
      <Route path="/agence-ia" element={<AiAgencyPage />} />
      <Route path="/agence-web" element={<WebAgencyPage />} />
      <Route path="/agence-scraping" element={<ScrapingAgencyPage />} />
      <Route path="/agence-strapi" element={<StrapiAgencyPage />} />
    </Routes>
  )
}

export default App
