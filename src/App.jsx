// import '../public/darkTheme.css';
// import '../public/lighTheme.css';
// import Header from './components/Header.jsx';
// import WeatherData from './components/WeatherData.jsx';
// import NotFound from './routes/NotFound.jsx';
// import Favorites from './routes/Favorites.jsx';
// import Form from './components/Form.jsx';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { Toaster } from 'react-hot-toast';
// import { Route, Switch } from 'wouter';
// import Footer from './components/Footer.jsx';



// const client = new QueryClient();

// export default function App() {
//   return (
//     <QueryClientProvider client={client}>
//       <Switch>
//         <Route path='/'>
//           <Header /> <WeatherData />
//         </Route>
//         <Route
//           path='/form'
//           component={Form}
//         />
//         <Route
//           path='/favorites'
//           component={Favorites}
//         />
//         <Route component={NotFound} />
//       </Switch>
//       <Footer />
//       <Toaster />
//     </QueryClientProvider>
//   );
// }

import '../src/index.css';

import Buttons from "./components/Buttons";
const App = () => {
  return (
    <div className='mx-8 my-8'>
      <Buttons />
    </div>
  );
};

export default App;
