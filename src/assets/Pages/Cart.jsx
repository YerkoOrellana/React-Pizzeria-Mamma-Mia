import React, { useState, useEffect } from "react";

const Cart = () => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

    const [pizzas, setPizza] = useState([]);
    
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

    useEffect(() => {
        const totalCalculado = carrito
            .map(item => item.count * item.price)
            .reduce((suma, iteracion) => suma + iteracion, 0);
        setTotal(totalCalculado);
    }, [carrito]);

    const agregarPizza = (nuevaPizza) => {
        setCarrito(prevCarrito => {
            const existe = prevCarrito.find(pizza => pizza.id === nuevaPizza.id);
            if (existe) {
                return prevCarrito.map(pizza =>
                    pizza.id === nuevaPizza.id
                        ? { ...pizza, count: pizza.count + nuevaPizza.count }
                        : pizza
                );
            } else {
                return [...prevCarrito, nuevaPizza];
            }
        });
    };

    const restarPizza = (pizzaId) => {
        setCarrito(prevCarrito => {
            const pizzaExistente = prevCarrito.find(pizza => pizza.id === pizzaId);
            if (pizzaExistente && pizzaExistente.count > 1) {
                return prevCarrito.map(pizza =>
                    pizza.id === pizzaId
                        ? { ...pizza, count: pizza.count - 1 }
                        : pizza
                );
            } else {
                return prevCarrito.filter(pizza => pizza.id !== pizzaId);
            }
        });
    };

    const eliminarPizza = (pizzaId) => {
        setCarrito(prevCarrito => prevCarrito.filter(pizza => pizza.id !== pizzaId));
    };

    return (
        <div className="cart-container">
            <h2>Carrito de Compras</h2>
            <div className="available-pizzas">
                <h4>Disponibles para agregar:</h4>
                <div className="pizza-list">
                    {pizzas.map(pizza => (
                        <div key={pizza.id} className="pizza-card">
                            <img src={pizza.img} alt={pizza.name} className="pizza-image" />
                            <div className="pizza-info">
                                <h5 className="pizza-title">{pizza.name}</h5>
                                <p className="pizza-price">Precio: ${pizza.price.toLocaleString('es-CL')}</p>
                                <button className="add-button" onClick={() => agregarPizza({ ...pizza, count: 1 })}>
                                    Añadir Pizza
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="cart-items">
                <h4 className="cart-title">Pizzas a llevar 🛒:</h4>
                {carrito.length === 0 ? (
                    <p>No hay pizzas en el carrito.</p>
                ) : (
                    <ul>
                        {carrito.map(item => (
                            <li key={item.id} className="cart-item">
                                <img src={item.img} alt={item.name} className="cart-item-image" />
                                {item.name} - {item.count} x ${item.price.toLocaleString('es-CL')} = ${(item.count * item.price).toLocaleString('es-CL')}
                                <button className="change-button" onClick={() => agregarPizza({ ...item, count: 1 })}>+</button>
                                <button className="change-button" onClick={() => restarPizza(item.id)}>-</button>
                                <button className="remove-button" onClick={() => eliminarPizza(item.id)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                )}
                <div className="total-amount">
                    <h5>Monto Total: ${total.toLocaleString('es-CL')}</h5>
                    <button className="buy-button">Comprar</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;