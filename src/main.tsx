import { InspireProvider } from '@tapie-kr/inspire-react/provider';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/themes/color.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InspireProvider>
      <App />
    </InspireProvider>
  </StrictMode>,
);
