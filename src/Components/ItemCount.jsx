import { useState } from "react"

const ItemCount = ({stock}) => {
    const [items,setItems] = useState(1)
    const [itemStock, setItemsStock] = useState(stock)

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

    const onAdd = () => {
        if (itemStock >= items) {
        setItemsStock (itemStock-items)
        setItems(1)
        console.log ('Agregaste ' + items + ' juegos al carrito!')
        }
    }
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
                    <div className="btn-group my-1" aria-label="Basic mixed styles example">
                            <button type="button" className="btn btn-success" onClick={onAdd}>Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCount