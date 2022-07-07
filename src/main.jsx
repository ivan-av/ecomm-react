import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'
// Redux
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Configuration of the Redux library */}
    <Provider store={store}>
      {/* Configuration of the react-router-dom library, using HashRouter */}
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
)
