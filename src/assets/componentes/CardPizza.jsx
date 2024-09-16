import React from "react";

function CardPizza ({img, name, ingredients, price}){
    return(
        <div className="card">
            <img className="imgpizza" src={img}></img>
            <h1>Pizza: {name}</h1>
            <hr></hr>
            <p>Ingredientes: 🍕 {ingredients.join(", ")}</p>
            <hr></hr>
            <p>Precio: ${price.toLocaleString('es-CL')}</p>
            <button>Ver más 👀</button>
            <button>Añadir 🛒</button>
        </div>  
    )
}

export default CardPizza;