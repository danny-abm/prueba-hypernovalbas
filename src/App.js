import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//importando componente de formulario gastos

import Gastos from './components/Gastos.js';

function App() {
  

  return (
    
    <BrowserRouter>
      <Switch>
        <Route exact path ="/gastos" component={Gastos}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
