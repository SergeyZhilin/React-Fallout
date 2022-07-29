// Modules
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Components
import App from './app/App';

// Styles
import './index.scss';

const root = createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
      <App/>
		</StrictMode>,
);
