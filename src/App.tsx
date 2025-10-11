import 'highlight.js/styles/github-dark.css';
import { HashRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import useScrollToSection from './hooks/useScrollToSection';
import Blog from './pages/Blog';
import ArticleDetail from './pages/ArticleDetail';

function App() {
  const { activeSection, scrollToSection } = useScrollToSection();

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route
              path="/"
              element={<Home activeSection={activeSection} scrollToSection={scrollToSection} />}
            />
            <Route
              path="/blog"
              element={<Blog activeSection={activeSection} scrollToSection={scrollToSection} />}
            />
            <Route
              path="/article/:articleName"
              element={
                <ArticleDetail activeSection={activeSection} scrollToSection={scrollToSection} />
              }
            />
            <Route
              path="*"
              element={<NotFound activeSection={activeSection} scrollToSection={scrollToSection} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
