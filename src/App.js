import React, { useState } from 'react';
import Home from './components/Home';
import "./scss/index.scss";
export default function App() {
  const [theme, setTheme] = useState("dark");
  return <div className="app" data-theme={theme}>
    <Home />
  </div>;
}