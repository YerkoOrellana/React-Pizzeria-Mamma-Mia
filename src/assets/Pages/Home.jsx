import React, { useState, useEffect, useContext } from "react";
import Header from '../componentes/Header';
import CardPizza from '../componentes/CardPizza';
import { CartContext } from '../Context/CartContext';

function Home() {
    
        const [pizza, setPizza] = useState([]);
        const { addToCart } = useContext(CartContext);
    
        useEffect(() => {
            const fetchPizza = async () => {
                try {
                    const response = await fetch("http://localhost:5000/api/pizzas/");
                    const data = await response.json();
                    setPizza(data);
                } catch (error) {
                    console.error("Error fetching pizza:", error);
                }
            };
            fetchPizza();
        }, []);
    return (
        <div className="App">
            <Header />
            <div className="card-container">
                {pizza.map((pizza) => (
                    <CardPizza key={pizza.id} pizza={pizza} addToCart={addToCart}/>
                ))}
            </div>
        </div>
    );
}

export default Home;