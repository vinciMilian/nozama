import react, {useState} from "react";
import { Outlet, Link } from "react-router-dom";
import "../style/header.scss"
import products from "../../scripts/products";

function Header() {

    const [searchTerm, setSearchTerm] = useState("")
    const [filteredProducts, setFilteredProducts] = useState([])

    const handleSearch = (e) => {
        const query = e.target.value
        setSearchTerm(query)

        if (query.trim() !== "") {
            const result = products.filter((product) =>
                product.name.toLowerCase().includes(query.toLowerCase())
            )

            setFilteredProducts(result)
        } else {
            setFilteredProducts([])
        }
    }

  return (
    <div className="containerHeader">
        <header>
            <h2>
                <Link to="/" className="logoB">LOGO</Link>
            </h2>
            <div className="searchContainer">
                <div className="searchbar">
                    <input 
                        type="text" 
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
                <div className="searchbutton">
                    <button>Search</button>
                </div>
            </div>
            <ul className="navbuttons">
                <li>
                    <a href="#">
                       <Link to="/cart">CART</Link>
                    </a>
                </li>
            </ul>
        </header>

        {searchTerm && filteredProducts.length > 0 &&(
            <div className="searchPopup">
                <ul>
                    {filteredProducts.map((product) => (
                        <li key={product.key} className="popupItem">
                            <Link to={`/product/${product.id}`} className="popupLink">
                                <img src={product.image} alt={product.name} className="popupImage" />
                                <span>{product.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
  );
}

export default Header;