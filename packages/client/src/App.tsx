import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useStore } from './store';

function App() {
  const [count, setCount] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const store = useStore();

  const { t } = useTranslation();

  // This is to test sentry
  const breakIt = () => {
    const foo = {};
    const bar = (foo as any).bar.baz;
    console.log(bar);
  };

  return (
    <div
      className="App"
      style={{ display: 'grid', gridTemplateColumns: '1fr auto' }}
    >
      <img src="/images/image-splash-caitlynpulsefire.jpg" alt="" />

      <header className="App-header">
        <p>{t('title')}</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          <button onClick={() => breakIt()}>Break it!</button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link external"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
