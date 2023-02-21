const ItemDetail = ({item}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={item.image} alt={item.title} />
                </div>
                <div className="col">
                    <h2>{item.title}</h2>
                    <hr />
                    <p><b>{item.description}</b></p>
                    <hr />
                    <h3><b>${item.price}</b></h3>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail