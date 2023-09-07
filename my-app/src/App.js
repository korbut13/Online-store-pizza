import '../src/scss/app.scss';
import {Routes, Route} from 'react-router-dom'

import Header from './components/Header';
import Main from './pages/Main';
import Cart from './pages/Cart';
import NotFoundPage from './pages/NotFound';
import PizzaDetails from './components/PizzaDetails';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/pizza/:id' element={<PizzaDetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
