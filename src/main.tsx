import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import { LanguageProvider } from './app/i18n/LanguageProvider';
import './styles/index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const preloaderElement = document.getElementById('app-preloader');

const hidePreloader = () => {
  if (!preloaderElement) return;

  preloaderElement.classList.add('is-hidden');
  window.setTimeout(() => preloaderElement.remove(), 120);
};

createRoot(rootElement).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);

window.requestAnimationFrame(hidePreloader);
