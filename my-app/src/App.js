import '../src/scss/app.scss';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const [pizzas, setPizzas] = useState([]);
  const url = "https://64ef4b85219b3e2873c4449b.mockapi.io/items";

  useEffect(()=> {
    fetch(url).then(response => {
      if(response.ok){
        return response.json()
      }
    }).then(resp => setPizzas(resp))
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories/>
              <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {pizzas.map(pizza => <PizzaBlock key={pizza.id} {...pizza}/>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
