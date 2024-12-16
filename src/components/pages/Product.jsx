import "../style/product.scss"
import Header from "./Header";
import { useParams } from "react-router-dom";
import products from "../../scripts/products";
import { useEffect, useState } from "react";

function Product() {

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const product = products.find((p) => p.id === parseInt(id));
    setProduct(product); 
  }, [id]);

  if (!product) {
    return <div>Produto não encontrado!</div>;
  }

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
    <div className="containerProduct">
        <Header/>
        <div className="productPage">
          <div className="productDetail">
            <img src={product.image} alt={product.name} className="productImage" />
            <hr />
            <div className="productDesc">
              <h2>{product.name}</h2>
              <p><strong>Preço: </strong>R${product.price.toFixed(2)}</p>
              <button onClick={() => addToCart(product)}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Product;