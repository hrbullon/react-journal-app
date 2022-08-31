import React from 'react';
import ReactDOM from 'react-dom/client';
import JournalApp from './JournalApp';

import './styles/styles.scss';
import 'sweetalert2/src/sweetalert2.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <JournalApp />
  </React.StrictMode>
);

