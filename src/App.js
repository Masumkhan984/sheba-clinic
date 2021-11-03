import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Patients from './Pages/Home/Patients/Patients';
import AllServices from './Pages/Home/Services/AllServices';
import Services from './Pages/Home/Services/Services/Services';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Route>
        <Header></Header>
        </Route>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/allServices">
            <AllServices></AllServices>
          </Route>
          <Route path="/doctor">
            <Patients></Patients>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Route>
          <Footer></Footer>
        </Route>
      </Router>
    </div>
  );
}

export default App;
