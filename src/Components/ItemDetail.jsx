import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {
    return (
        <div className="container">
            <div className="row my-3">
                <div className="col">
                    <img src={item.image} alt={item.title} />
                </div>
                <div className="col text-light">
                    <h2>{item.title}</h2>
                    <hr />
                    <p><b>{item.description}</b></p>
                    <hr />
                    <h3><b>${item.price}</b></h3>
                    <ItemCount stock={item.stock}/>
                </div>
                
            </div>
        </div>
    )
}

export default ItemDetail