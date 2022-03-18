import CustomButton from "./CustomButton";

const Card = (props) => {
    return (
        <div className="card">
            <div className="notification"></div> 
            <div className="card-img-container">
                <img src={props.item.image} alt={props.item.name} />
            </div>
            <div className="title">
               {props.item.name} 
            </div>
            <div className="description">
                {props.item.description}
            </div>
            <CustomButton value="Add to cart" />
        </div>
    )
}

export default Card;