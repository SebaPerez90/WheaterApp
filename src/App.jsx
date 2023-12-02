import '../src/styles/dark-theme.scss';
import Header from './components/Header/Header.jsx';
import Main from './components/Main.jsx';
import NotFound from './routes/NotFound.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { Route, Switch } from 'wouter';
import Footer from './components/Footer/Footer.jsx';
import Readme from './routes/Readme.jsx';
import Contact from './routes/Contact';

import PouringDay from './components/Weather Cards/PouringDay.jsx';

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <Switch>
        <Route path='/'>
          <Header /> <Main /> <Footer />
        </Route>
        <Route
          path='/readme'
          component={Readme}
        />
        <Route
          path='/contact'
          component={Contact}
        />
        <Route component={NotFound} />
      </Switch>
      <Toaster />
    </QueryClientProvider>
    // <PouringDay />
  );
}
