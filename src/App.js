import React from 'react';
import './App.css';
import Students from './students.js';

function App() {
  return (
    <div className="App">
      <h1>Position in AI Course</h1>
      <Students firstStudent="Muhammad Irhad" secondStudent="Shaukat Ali"/>
      <hr/>
      <h1>Position in IOT Course</h1>
      <Students firstStudent="Mudassar Iqbal" secondStudent="Muhammad Ahmed"/>
    </div>
  );
}

export default App;
