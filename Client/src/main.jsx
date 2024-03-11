/* eslint-disable react/prop-types */
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App.jsx'
import "./Styles/_global.scss"
import './Styles/_typography.scss'
import store from './store/index.jsx'
import { AuthProvider } from './store/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Provider>
)
