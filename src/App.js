import React from 'react';
import Routes from './routes';

import Header from './components/Header';

import './styles.css';

// Statless Component
const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello!!!</h1>
//     </div>
//   );
// }

export default App;
