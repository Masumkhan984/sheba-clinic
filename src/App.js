import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Doctors from './Pages/Home/Doctors/Doctors';
import DoctorDetails from './Pages/Home/Doctors/DoctorsDetails/DoctorDetails';
import Home from './Pages/Home/Home/Home';
import AllServices from './Pages/Home/Services/AllServices';
import ServiceDetails from './Pages/Home/Services/Service/ServiceDetails';
import Services from './Pages/Home/Services/Services/Services';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Login/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
        <AuthProvider>
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
            <PrivateRoute path="/serviceDetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/doctor">
              <Doctors></Doctors>
            </Route>
            <PrivateRoute path="/doctorDetails">
                <DoctorDetails></DoctorDetails>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Route>
            <Footer></Footer>
          </Route>
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
