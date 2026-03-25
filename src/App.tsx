import { Routes, Route } from 'react-router-dom';
import NigeriaPage  from './pages/NigeriaPage';
import EswatiniPage from './pages/EswatiniPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import { isSzDomain } from './utils/localeRoutes';

export default function App() {
  if (isSzDomain) {
    // swoop.com.sz — Eswatini is default, Nigeria at /ng
    return (
      <Routes>
        <Route path="/"   element={<EswatiniPage />} />
        <Route path="/ng" element={<NigeriaPage  />} />
        <Route path="/privacy"    element={<PrivacyPage locale="SZ" />} />
        <Route path="/terms"      element={<TermsPage  locale="SZ" />} />
        <Route path="/ng/privacy" element={<PrivacyPage locale="NG" />} />
        <Route path="/ng/terms"   element={<TermsPage  locale="NG" />} />
      </Routes>
    );
  }

  // swoop.com.ng (or localhost / any other host) — Nigeria is default, Eswatini at /sz
  return (
    <Routes>
      <Route path="/"   element={<NigeriaPage  />} />
      <Route path="/sz" element={<EswatiniPage />} />
      <Route path="/privacy"    element={<PrivacyPage locale="NG" />} />
      <Route path="/terms"      element={<TermsPage  locale="NG" />} />
      <Route path="/sz/privacy" element={<PrivacyPage locale="SZ" />} />
      <Route path="/sz/terms"   element={<TermsPage  locale="SZ" />} />
    </Routes>
  );
}
