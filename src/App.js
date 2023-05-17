import Login from './pages/Login Page/index';
import Routes  from './pages/sandrine file/routes';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Login></Login>
      <Router>
        <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;
