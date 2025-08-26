import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
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
