import React from 'react';
import '../public/darkTheme.css';
import '../public/lighTheme.css';
import Header from './components/Header';
import WeatherData from './components/WeatherData.jsx';
import NotFound from '../src/routes/NotFound.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useStore } from '../store';
import { Toaster } from 'react-hot-toast';
import { Route } from 'wouter';
import Footer from './components/Footer';

const client = new QueryClient();

const App = () => {
  const { theme } = useStore();

  return (
    <QueryClientProvider client={client}>
      <Header />
      <main className={theme === 'dark' ? 'main-dark-theme' : 'main-light-theme'}>
        <Footer />
        <Route
          path='/'
          component={WeatherData}
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
