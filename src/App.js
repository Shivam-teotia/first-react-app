/*import logo from './logo.svg';*/
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState('');

  const showAlert = (message, type) => {
    setAlert({
      mssg: message,
      type: type
    })
  }
  const tooglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      setTimeout(() => {
        setAlert('');
      }, 2000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      setTimeout(() => {
        setAlert('');
      }, 2000);
    }
  }
  return (
    <>
      <Router>
        <Navbar title="NAVBAR" homeText="Home Text" mode={mode} togglemode={tooglemode} />
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
            <Route exact path="/">
            <Textform heading="Enter the Text here" mode={mode}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
