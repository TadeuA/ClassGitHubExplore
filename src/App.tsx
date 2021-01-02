import React from 'react';
import { AppProvider } from './hooks';
import GlobalStyles from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <AppProvider>
    <Routes />
  </AppProvider>
);
export default App;
