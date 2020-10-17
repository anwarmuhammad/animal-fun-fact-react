import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';
const title = '';
const displayFact = e => {
  let facts = animals[e.target.alt].facts;
  let rand = Math.floor(Math.random() * animals[e.target.alt].facts.length);
  let fact = facts[rand];
  document.getElementById("fact").innerHTML = fact;
}
alert('React App')
const images = [];
for(const animal in animals ){

    images.push(
      <img 
       key = {animal}
       className = {animal}
       alt = {animal}
       src={animals[animal].image}
        width = '100 px'
       aria-label = {animal}
       role = 'button' 
       onClick={displayFact}
       />
    )
}

const background = (
                     <div>
                     <img 
                      className='background'
                      alt='ocean'
                      src='/images/ocean.jpg' />
                      </div>
                  );


const animalFacts  = (
  <div>
   <h1>{title ===''?'Deep Sea Animals': title } </h1>
   {background}
   <div className='animals'>
     {images}
   </div>
   <p id ="fact">
   </p>
  </div>
  );

ReactDOM.render(
  animalFacts,
  document.getElementById('root')
);
