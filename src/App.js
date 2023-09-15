
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage, JokePage, PageNotFound } from './pages';


function App() {
  return (
    <div className="App"> 
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='joke' element={<JokePage />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
