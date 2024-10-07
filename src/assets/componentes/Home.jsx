import React from "react";
import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from './Pizzas';

function Home() {
    return (
        <div className="App">
            <Header />
            <div className="card-container">
                {pizzas.map((pizza) => (
                    <CardPizza key={pizza.id} pizza={pizza} />
                ))}
            </div>
        </div>
    );
}

export default Home;