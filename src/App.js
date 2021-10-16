import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
// import AuthProvider from './contexts/AuthProvider';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
          <Home></Home>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
