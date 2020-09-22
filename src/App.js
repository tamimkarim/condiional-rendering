import React, { useState } from 'react';
import './App.css';
import User from './Component/User/User';

function App() {
  const [familiar, setFamiliar] = useState(false);

  return (
    <div className="app">
      <h2>Is familiar : {familiar.toString()} </h2>
      <button onClick={() => setFamiliar(!familiar)}>Toggle Friend</button>
      <User familiar={familiar}></User>

    </div>
  );
}

export default App;
