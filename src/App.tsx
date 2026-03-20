import { Routes, Route } from 'react-router-dom';
import NigeriaPage  from './pages/NigeriaPage';
import EswatiniPage from './pages/EswatiniPage';

export default function App() {
  return (
    <Routes>
      <Route path="/"   element={<NigeriaPage  />} />
      <Route path="/sz" element={<EswatiniPage />} />
    </Routes>
  );
}
