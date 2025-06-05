import { BrowserRouter, Route, Routes } from 'react-router';
import PageComponents from './pages/page-components';
import MainLayout from './pages/layout-main';
import PageHome from './pages/home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<PageHome />} />
          <Route path="/style-guide" element={<PageComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
