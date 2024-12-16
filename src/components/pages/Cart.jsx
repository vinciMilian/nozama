import react, { useState, useEffect } from "react";
import Header from "./Header";
import products from "../../scripts/products";
import '../style/cart.scss'

function Cart() {

  const [cart, setCart] = useState([])

  useEffect(() => {
    const savedCart = JSON.parse(sessionStorage.getItem('cart')) || []
    setCart(savedCart)    
  }, [])

  const removeItem = (productId) => {
    const updateCart = cart.filter(item => item.id !== productId)
    sessionStorage.setItem('cart', JSON.stringify(updateCart))
    setCart(updateCart)
  }

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)


  return (
    <div className="containerHome">
        <Header/>
        {cart.length === 0 ? (
          <div className="cartEmpty">
            <h2>CART</h2>
            <h3>Cart is Empty</h3>
          </div>
        ) : (
          <div className="cartContainer">
            <h2>CART</h2>
            <ul>
              {cart.map((item) =>(
                <li key={item.id}>
                  <img src={item.image} className="imgItem" alt={item.name} style={{width: 100, height: 100}}/>
                  <span className="itemName">
                    {item.name}
                  </span>
                  <span>
                    ${item.price.toFixed(2)}
                  </span> 
                  <span>
                    Quant: {item.quantity}
                  </span>    
                  <button onClick={() => removeItem(item.id)}>
                    Remove Item
                  </button>               
                </li>
              ))}
            </ul>
            <hr />
            <h2>Total? ${totalPrice.toFixed(2)}</h2>
          </div>
        )}
    </div>
  );
}

export default Cart;