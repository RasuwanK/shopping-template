import Card from "./Card";


const Showcase = (props) => {
    return (
        <div className="showcase">
            {
                props.data.map(
                    (item) => {
                        return (
                            <Card item={item} key={item.id}/>
                        )
                    }
                )
            }
        </div>
    )
}

export default Showcase;