import Home from './Home';
import Navbar from './NavBar'
import Contacter from './Contacter';
import Terrains from './Terrains';
import Conseils from './conseils';

import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar/>
        
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Contacter">
            <Contacter/>
          </Route>
          <Route path="/Terrains">
            <Terrains/>
          </Route>
          <Route path="/Conseils">
            <Conseils/>
          </Route>

        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
