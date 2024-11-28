import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-shf5wwue3msou3qa.us.auth0.com"
    clientId="5nKZPTOyXuaRmxDrGy0ruG3teceIoZ4U"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
