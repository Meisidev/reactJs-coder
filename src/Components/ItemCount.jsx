import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ItemCount = ({stock, onAdd}) => {
    const [items,setItems] = useState(1)
    const [itemStock, setItemsStock] = useState(stock)
    const [itemadded, setItemAdded] = useState(false)

    const aumentStock = () => {
        if (items<itemStock) {
        setItems(items+1)
        }
    }
    const disminStock = () => {
        if (items>1){
        setItems(items-1)
        }
    }

    const addToCart = () => {
        if (itemStock >= items) {
        setItemsStock (itemStock-items)
        setItems(1)
        console.log ('Agregaste ' + items + ' juegos al carrito!')
        setItemAdded (true)
        onAdd(items)
        }
    }

    useEffect (() => {
        setItemsStock (stock)
    }, [stock])

    return (
        <div className="container">
            <div className="row my-3">
                <div className="col">
                    <div className="btn-group" aria-label="Basic mixed styles example">
                        <button type="button" className="btn btn-primary" onClick={disminStock}>-</button>
                        <button type="button" className="btn btn-primary">{items}</button>
                        <button type="button" className="btn btn-primary" onClick={aumentStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {itemadded ? <Link to={'/cart'} className='btn btn-success'>Terminar mi compra</Link> : 
                    <button className="btn btn-success" onClick={addToCart}>Agregar al Carrito</button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount