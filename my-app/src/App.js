import '../src/scss/app.scss';
import {Routes, Route} from 'react-router-dom'

import Header from './components/Header';
import Main from './pages/Main';
import Cart from './pages/Cart';
import NotFoundPage from './pages/NotFound';
import { createContext, useState } from 'react';

export const SearchContext = createContext();

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="App">
      <div className="wrapper">
        <SearchContext.Provider value={{ searchValue, setSearchValue}}>
        <Header />
        <div className="content">
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
          </Routes>
        </div>
        </SearchContext.Provider>
      </div>
    </div>
  );
}

export default App;
