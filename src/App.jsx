import '../public/darkTheme.css';
import '../public/lighTheme.css';
import Header from './components/Header';
import WeatherData from './components/WeatherData.jsx';
import NotFound from './routes/NotFound.jsx';
import Favorites from './routes/Favorites.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { Route } from 'wouter';

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <Header />
      <Route
        path='/'
        component={WeatherData}
      />
      <Route
        path='/favorites'
        component={Favorites}
      />
      <Route
        path='/notfound'
        component={NotFound}
      />
      <Toaster />
    </QueryClientProvider>
  );
}
