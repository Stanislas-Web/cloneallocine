import React from 'react';
import Header from './components/Header';
import 'semantic-ui-css/semantic.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Bannier from './components/Bannier';
import Annonce from './components/Annonce';
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
                <Route path="/detail/:id">
                <DetailFilm/>
                </Route>
                <Route path="/topfilm/">
                <TopFilm/>
                </Route>
                <Route path="/popularfilm/">
                <popularFilm/>
                </Route>
                <Route path="/annonce/:id">
                <Annonce/>
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