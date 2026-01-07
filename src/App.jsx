// src/App.jsx
import { RouterProvider } from 'react-router-dom';
import approuter from './configs/router-config';

function App() {
  return <RouterProvider router={approuter} />;
}

export default App;
