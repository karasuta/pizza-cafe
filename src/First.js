
import { useState } from 'react';
import { data } from './data';
import './App.css';
import Pizza from './Pizza';
import Buttons from './Buttons';

function First() {
  const [pizzaList, setPizzaList] = useState (data);
  const chosenPizza =(searchTerm)=>{
    const newPizzaList = data.filter(element=>element.searchTerm===searchTerm);
    setPizzaList(newPizzaList);
  }

  return (
    <div>
      <div className='container'>
        <h1 className='title'>Выбери свою пиццу</h1>
      </div>
      <div className='container'>
        <Buttons filteredPizza={chosenPizza}/>
      </div>
      <div>
        <Pizza myPizza={pizzaList}/>
      </div>
    </div>
  );
}
export default First;

