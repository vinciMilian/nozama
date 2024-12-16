import { Link } from 'react-router-dom'
import products from '../../scripts/products.js'
import "../style/vitrine.scss"

function Vitrine() {

  const addToCart = (product) => {

    const currentCart = JSON.parse(
      sessionStorage.getItem('cart')
    ) || []

    const existingProductIndex = currentCart.findIndex(
      item => item.id === product.id      
    )

    if (existingProductIndex !== -1) {
      currentCart[existingProductIndex].quantity += 1;
    } else {
      currentCart.push({...product, quantity: 1})
    }

    sessionStorage.setItem('cart', JSON.stringify(currentCart))

    console.log("Produto adicionado ao carrinho")
  }

  return (
    <div className="containerVitrine">
        <h2>
            Lista de Produtos:
        </h2>
        <div className="product-list">
            {products.map((product) => (
              <div key={product.id} className="product-item">
                <Link to={`/product/${product.id}`} className="popupLink">
                  <img src={product.image} alt={product.name} className="product-image" />
                </Link>
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <button onClick={
                  () => addToCart(product)
                }>
                  Add To Cart
                </button>
              </div>  
            ))}
        </div>
    </div>
  );
}

export default Vitrine;