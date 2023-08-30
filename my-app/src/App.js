import '../src/scss/app.scss';
import {Routes, Route} from 'react-router-dom'

import Header from './components/Header';
import Main from './pages/Main'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <div className="content">
          <div className="container">
            <Routes>
              <Route path='/' element={<Main/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
