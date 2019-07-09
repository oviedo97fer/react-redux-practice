import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Jugadores from './components/Jugadores';
import Titulares from './components/Titulares';
import Suplentes from './components/Suplentes';


const App = () => {
  return (
    <Provider store={store}>
      <main>
        <h1>Manager</h1>
        <Jugadores/>
        <Titulares/>
        <Suplentes/>
      </main>
    </Provider>
  );
}

export default App;
