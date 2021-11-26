import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { version } from '../package.json';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Shell } from './domain/shell/views';
import { BodyTypography, HeadingTypography } from './styles/global';

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
      <HeadingTypography />
      <BodyTypography />
      <Shell>
        <App />
      </Shell>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('universe-app'),
);

document.addEventListener(
  'contextmenu',
  (event) => {
    event.preventDefault();
    return false;
  },
  { capture: true },
);
