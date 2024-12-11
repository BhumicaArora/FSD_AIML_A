import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./home"
import Counter from './counter';
import Stopwatch from './stopwatch';
import Refex from './Refex';
import Parent from './parent';
import Reducer from './reducerex'; 
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/counter" element={<Counter></Counter>} />
        <Route path="/stopwatch" element={<Stopwatch></Stopwatch>} />
        <Route path="/refex" element={<Refex></Refex>} />
        <Route path="/contextex" element={<Parent/>} />
        <Route path="/reducerex" element={<Reducer/>} />
        <Route path="*" element={<h1>Page unavailable</h1>} />
      </Routes>
      <Home></Home>
    </div>
  );
}
export default App;

