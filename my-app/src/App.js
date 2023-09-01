import '../src/scss/app.scss';
import {Routes, Route} from 'react-router-dom'

import Header from './components/Header';
import Main from './pages/Main';
import Cart from './pages/Cart';
import NotFoundPage from './pages/NotFound';
import { useState } from 'react';

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="App">
      <div className="wrapper">
        <Header searchValue={searchValue} onChangeSearchValue={setSearchValue}/>
        <div className="content">
          <Routes>
            <Route path='/' element={<Main searchValue={searchValue}/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
