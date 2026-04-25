import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import { LanguageProvider } from './app/i18n/LanguageProvider';
import './styles/index.css';

const rootElement = document.getElementById('root');
const preloaderElement = document.getElementById('app-preloader');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

createRoot(rootElement).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);

window.setTimeout(() => {
  preloaderElement?.classList.add('is-hidden');
  window.setTimeout(() => preloaderElement?.remove(), 240);
}, 420);
