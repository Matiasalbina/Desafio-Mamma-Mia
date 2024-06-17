import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { PizzaProvider } from './context/PizzaContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <PizzaProvider>
      <React.StrictMode>
    <App />
  </React.StrictMode>,
  </PizzaProvider>

)
