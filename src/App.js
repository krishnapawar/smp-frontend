
import "bootstrap/dist/css/bootstrap.min.css";
// src/index.js
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './Custom.css';
import './Button.css';

import AppRoute from './AppRouter';

function App() {
  return (
    <>
    <AppRoute />
    </>
  );
}

export default App;
