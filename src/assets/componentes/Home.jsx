import React, { useState, useEffect } from "react";
import Header from './Header';
import CardPizza from './CardPizza';

function Home() {
    
        const [pizza, setPizza] = useState([]);
    
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
                    <CardPizza key={pizza.id} pizza={pizza} />
                ))}
            </div>
        </div>
    );
}

export default Home;