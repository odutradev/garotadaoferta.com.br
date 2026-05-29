import { createRoot } from 'react-dom/client';
import { StrictMode, useEffect } from 'react';

import defaultConfig from '@assets/config/default';
import GlobalStyles from '@styles/globalStyles';
import Router from '@routes/index';

const App = () => {
  useEffect(() => {
    console.log(`version: ${defaultConfig.version} - mode: ${defaultConfig.mode}`);
  }, []);

  return (
    <>
      <Router />
      <GlobalStyles />
    </>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
