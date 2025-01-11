import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routing/router';
import './scss/styles.scss';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
