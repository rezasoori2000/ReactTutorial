import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Alert from './components/Alert';

function App() { 
  return (
    <div className="App">
<Welcome/>
<Alert message="this is message" messageType="info">
  <h1> this is the children</h1>
</Alert>
    </div>
  );
}

export default App;
