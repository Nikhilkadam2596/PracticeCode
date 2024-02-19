import "./CartCard.css"
import { useCart } from "../context/CartContext"


export const CartCard = ({product}) => {
    const {name, price, image} = product
    const {removeFromCart} = useCart();

  return (
    <div className="cartCard">
        <img src={image} alt={name} />
        <p className="productname">{name}</p>
        <p className="productprice">Rs.{price}</p>
        <button onClick={() => removeFromCart(product)}>Remove</button>
      
    </div>
  )
}


