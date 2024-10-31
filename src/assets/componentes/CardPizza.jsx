import React from "react";
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

function CardPizza({ pizza }) {
    const { addToCart } = useContext(CartContext);

    return (
            <div className="card">
                <img 
                    src={pizza.img} 
                    alt={pizza.name} 
                    className="imgpizza" 
                />
                <h1 className="nombrePizza">Pizza: {pizza.name}</h1>
                <hr />
                <div className="ingredientes">
                    <p>Ingredientes:</p>
                    <ul className="list-inline">
                        {pizza.ingredients.map((ingredient, index) => (
                            <li key={index} className="list-group-item">🍕 {ingredient}</li>
                        ))}
                    </ul>
                </div>
                <hr />
                <p>Precio: ${pizza.price.toLocaleString('es-CL')}</p>
                <div className="botones">
                    <button type="button" className="button">Ver más 👀</button>
                    <button type="button" className="button" onClick={() => addToCart(pizza)}>Añadir 🛒</button>
                </div>
            </div>
    );
}

export default CardPizza;