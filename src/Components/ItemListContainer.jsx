import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import arrayJuegos from './json/juegos.json';

const ItemListContainer = () => {

    const [items, setItems] = useState([])

    useEffect (() => {
        const promise = new Promise ((resolve) => {
            setTimeout (()=>{
                resolve(arrayJuegos)
            }, 2000)
        })
        promise.then((respuesta) => {
            setItems(respuesta)
        })
    },[]) 

    return (
        <div className="container text-center my-3 alert alert-dark bg-dark text-primary"> 
            <ItemList items={items}/>
            <ItemCount stock={10} />
        </div>
    )
}

export default ItemListContainer;