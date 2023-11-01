import '../src/index.scss';
import Header from './components/Header/Header.jsx';
import WeatherData from './components/WeatherData.jsx';
import NotFound from './routes/NotFound.jsx';
import Favorites from './routes/Favorites.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { Route, Switch } from 'wouter';
import Footer from './components/Footer/Footer.jsx';

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <Switch>
        <Route path='/'>
          <Header /> <WeatherData />
        </Route>
        <Route
          path='/favorites'
          component={Favorites}
        />
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <Toaster />
    </QueryClientProvider>
  );
}
