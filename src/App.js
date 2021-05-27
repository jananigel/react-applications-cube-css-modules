import React from 'react';
import './style.css';
import ApplicationCube from './pages/home/application-cube.js';
import HardDriveSizeConverter from './pages/hard-drive-size-converter/hard-drive-size-converter.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <ApplicationCube />
          </Route>
          <Route path="/hard-drive">
            <HardDriveSizeConverter />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
