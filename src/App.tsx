import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HospitalRun from 'components/HospitalRun';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <HospitalRun />
      </BrowserRouter>
    </div>
  );
}

export default App;
