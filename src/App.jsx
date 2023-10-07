import '../public/darkTheme.css';
import '../public/lighTheme.css';
import React from 'react';
import Header from './components/Header';
import WeatherData from './components/WeatherData.jsx';
import NotFound from '../src/routes/NotFound.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useStore } from '../store';
import { Toaster } from 'react-hot-toast';
import { Route } from 'wouter';

const client = new QueryClient();

const App = () => {
  const { themeDark } = useStore();

  return (
    <QueryClientProvider client={client}>
      <Header />
      <main className={themeDark ? 'main-dark-theme' : 'main-light-theme'}>
        <Route component={WeatherData} />
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
