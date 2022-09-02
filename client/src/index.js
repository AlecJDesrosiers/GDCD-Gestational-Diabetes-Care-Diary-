import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import Contextprovider from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Auth0Provider
    domain="dev-nfed57r7.us.auth0.com"
    clientId="n36wKpJyfSXyWYJzywHgrzqH6YYjvEsT"
    redirectUri={window.location.origin}
  >
    <Contextprovider>
    <App />
    </Contextprovider>
  </Auth0Provider>
);