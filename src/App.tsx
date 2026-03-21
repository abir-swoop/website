import { Routes, Route } from 'react-router-dom';
import NigeriaPage  from './pages/NigeriaPage';
import EswatiniPage from './pages/EswatiniPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

export default function App() {
  return (
    <Routes>
      <Route path="/"   element={<NigeriaPage  />} />
      <Route path="/sz" element={<EswatiniPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/sz/privacy" element={<PrivacyPage />} />
      <Route path="/sz/terms" element={<TermsPage />} />
    </Routes>
  );
}
