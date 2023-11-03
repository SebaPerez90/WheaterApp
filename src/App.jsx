import '../src/index.scss';
import Header from './components/Header/Header.jsx';
import WeatherData from './components/WeatherData.jsx';
import NotFound from './routes/NotFound.jsx';
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
          <Header /> <WeatherData /> <Footer />
        </Route>
        <Route component={NotFound} />
      </Switch>
      <Toaster />
    </QueryClientProvider>
  );
}
