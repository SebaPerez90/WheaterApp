import React from 'react';
import '../public/darkTheme.css';
import '../public/lighTheme.css';
import ForecastData from './components/ForecastData.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header';
import { useStore } from '../store';
import { Toaster } from 'react-hot-toast';
import { Route } from 'wouter';
import NotFound from '../src/routes/NotFound.jsx';

const client = new QueryClient();

const App = () => {
  const { theme } = useStore();

  return (
    <QueryClientProvider client={client}>
      <Header />
      <main className={theme === 'dark' ? 'main-dark-theme' : 'main-light-theme'}>
        <Route
          path='/'
          component={ForecastData}
        />
        <Route
          path='/notfound'
          component={NotFound}
        />
      </main>
      <Toaster />
    </QueryClientProvider>
  );
};

export default App;
