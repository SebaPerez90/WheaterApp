import '../src/styles/index.scss';
import Header from './components/Header/Header.jsx';
import Main from './components/Main.jsx';
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
          <Header /> <Main />
        </Route>
        <Route component={NotFound} />
      </Switch>
      <Toaster />
    </QueryClientProvider>
  );
}
