import { Link } from "react-router-dom"

const Item = ({item}) => {
    return (
        <Link to={'/item/' + item.id} className= 'text-decoration-none'>
            <div className="card h-100">
                <img src={item.image} className="card-img-top" alt={item.title}/>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <a href="./" className="btn btn-primary mt-auto">${item.price}</a>
                </div>
            </div>
        </Link>
    )
}

export default Item