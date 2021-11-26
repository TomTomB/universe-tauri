import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { version } from '../package.json';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_URL,
  enabled: import.meta.env.PROD,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
  release: version,
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

document.addEventListener(
  'contextmenu',
  (event) => {
    event.preventDefault();
    return false;
  },
  { capture: true },
);
