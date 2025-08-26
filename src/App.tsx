import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { ScrollToHashElement } from './components/ScrollToHashElement';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <ScrollToHashElement />
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
