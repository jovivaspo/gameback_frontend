import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Backlog from './pages/Backlog';
import NavBar from './components/NavBar';
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector(state => state.user.userInfo)

  return (
    <Router>
      <NavBar />
      {!user && <Home/>}
      {user && (<Routes>
        <Route path='/' element={<Backlog/>}/>
      </Routes>)}

    </Router>
  );
}

export default App;
