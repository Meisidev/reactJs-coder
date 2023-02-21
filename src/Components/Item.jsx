const Item = ({item}) => {
    return (
        <div className="card mt-3">
            <img src={item.image} className="card-img-top" alt={item.title}/>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <a href="./" className="btn btn-primary mt-auto">${item.price}</a>
            </div>
        </div>
    )
}

export default Item