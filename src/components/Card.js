import CustomButton from "./CustomButton";
import { useState } from "react";

const Card = (props) => {

    const [itemCount, setItemCount] = useState(0);

    const isEmpty = !parseInt(props.item.quantity);

    const addToCart = () => {
        setItemCount((prevCount => prevCount + 1));
    }

    const removeFromCart = () => {
        setItemCount((prevCount => prevCount - 1));
    }

    return (
        <div className="card">
            <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
            {
                isEmpty ? <div className="notification">Out of stock</div> : <></>
            }
            {
                itemCount ? <div onClick={() => { removeFromCart() }} className="count-notification">{itemCount}</div> : <></>
            }

            </div>
            <div className="card-img-container">
                <img src={props.item.image} alt={props.item.name} />
            </div>
            <div className="title">
               {props.item.name} 
            </div>
            <div className="description">
                {props.item.description}
            </div>
            <CustomButton 
            value="Add to cart"
            onClick={() => {
                addToCart();
            }} 
            style={ isEmpty ? {display:'none'}: {}} 
            />
        </div>
    )
}

export default Card;