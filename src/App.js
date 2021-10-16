import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Details from './Pages/Home/Foods/Details/Details';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import Footer from './Shared/Footer/Footer';
import Login from './User/Login/Login';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/details/:foodId'>
              <Details></Details>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
