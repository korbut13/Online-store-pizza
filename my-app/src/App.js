import '../src/scss/app.scss';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';


function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <Header/>
        <div class="content">
          <div class="container">
            <div class="content__top">
              <Categories/>
              <Sort/>
            </div>
            <h2 class="content__title">Все пиццы</h2>
            <div class="content__items">
              <PizzaBlock title="Мексиканская" price="395 ₽"/>
              <PizzaBlock title="Маргарита"price="350 ₽"/>
              <PizzaBlock title="С ветчиной и сыром" price="400 ₽"/>
              <PizzaBlock title="Вегетарианская" price="395 ₽"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
