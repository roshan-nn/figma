import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Details from './Components/Pages/Details';

function App() {
  return (
    <div className="App">
     <Header />
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/details/:id" element={<Details />}/>
      
      
      </Routes>
      </BrowserRouter>
      
    
       
    </div>
  );
}

export default App;
