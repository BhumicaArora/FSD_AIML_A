import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./home"
import Counter from './counter';
function App() {
  return (
    <div>
      <Routes>
     
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/counter" element={<Counter></Counter>} />
        <Route path="/stopwatch" element={<h1>Stopwatch</h1>} />
        <Route path="*" element={<h1>Page unavailable</h1>} />
      </Routes>
      <Home></Home>
    </div>
  );
}

export default App;

