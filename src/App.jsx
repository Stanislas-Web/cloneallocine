import React from 'react';
import Header from './components/Header';
import 'semantic-ui-css/semantic.min.css';
import Bannier from './components/Bannier';
import Container from './components/Container';
import DetailFilm from './components/DetailFilm';
import NotFound from './components/NotFound';
import TopFilm from './components/TopFilm'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Footer from './components/Footer';

const App = () => {
    return (<> 
          <Router>
              <>
              <Header/>
              <Bannier/>
              <Switch>
                <Route exact path="/">
                <Container/>
                </Route>
                <Route path="/detail/">
                <DetailFilm/>
                </Route>
                <Route path="/topfilm/">
                <TopFilm/>
                </Route>
                <Route path="*">
                <NotFound/>
                </Route>
              </Switch>
              <Footer/>
              </>
         </Router>

    </>);
}
 
export default App;