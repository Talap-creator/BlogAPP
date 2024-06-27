import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Inbox from './Components/Inbox/Inbox';
import ExamplePage from './Pages/BlogDetails/ExamplePage';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contacts from './Pages/Contacts/Contacts';
import Blog from './Pages/Blog/Blog';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<ExamplePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Inbox />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
