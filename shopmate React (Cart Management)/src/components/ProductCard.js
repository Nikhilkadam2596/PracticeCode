import "./ProductCard.css"
import { useCart } from "../context/CartContext"

export const ProductCard = ({product}) => {
    const { name, price, image}= product
    const {addToCart} = useCart();

  return (
    <div className="productCard">
        <img src={image} alt={name} />
        <p className="name">{name}</p>
        <div className="action">
            <p>Rs.{price}</p>
            <button onClick={()=> addToCart(product)}>Add To Cart</button>
        </div>   
    </div>
  )
}


