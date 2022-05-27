import React, { useState } from 'react';
import './style/App.css';
import AddComment from "./components/AddComment";
import Content from "./components/Content";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";

function App() {

  const [mobileMenu, setmobileMenu] = useState(false);

  const toggle = () => {
      setmobileMenu(!mobileMenu);
  };

  return (
    <>
      <Navigation hamburgerMenu={mobileMenu} toggleMenu={toggle} />
      <main className="main-container">
        <div>
          <Content />
          <AddComment />
        </div>
        <Sidebar />
      </main>
    </>
  );
}

export default App;
