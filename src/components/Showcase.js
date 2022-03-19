import Card from "./Card";


const Showcase = (props) => {

    const content = () => {
        const ret = {bestSelling:[], rest:[]};
        props.data.forEach(element => {
            parseInt(element.purchases) > 300 ? ret.bestSelling.push(<Card item={element} key={element.id} />) :  ret.rest.push(<Card item={element} key={element.id} />);
        });
        return ret;
    } 

    return (
        <div className="showcase-container">
            <p className="large-title">Best selling</p>
            <div className="showcase">
            {content().bestSelling}
            </div>
            <div className="showcase">
                {content().rest}
            </div>
        </div>
    )
}

export default Showcase;