import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Inbox from './Components/Inbox/Inbox';
import ExamplePage from './Pages/BlogDetails/ExamplePage';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contacts from './Pages/Contacts/Contacts';
import Blog from './Pages/Blog/Blog';
import LoadingScreen from './Js/LoadingScreen/LoadingScreen';
import { useFetchBlogs } from './Js/useFetchBlogs';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent = () => {
  const location = useLocation();
  const { blogs, loading } = useFetchBlogs();

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <ScrollToTop />
      <Header />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<Home blogs={blogs} loading={loading} />} />
            <Route path="/blog/:id" element={<ExamplePage blogs={blogs} loading={loading} />} />
            <Route path="/blog" element={<Blog blogs={blogs} loading={loading} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Inbox />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
