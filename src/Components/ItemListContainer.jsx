//import { getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { db } from "../Firebase";
import ItemList from "./ItemList";
import arrayJuegos from './json/juegos.json';

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const {id} = useParams()

    useEffect (() => {
        const promise = new Promise ((resolve) => {
            setTimeout (()=>{
                resolve(id ? arrayJuegos.filter(item => item.genre === id) : arrayJuegos)
            }, 2000)
        })
        promise.then((respuesta) => {
            setItems(respuesta)
        })
    },[id]) 

    //firebase
/*     useEffect (() => {
        const ref= doc(db, 'Productos', 'JktQejmiuQ52ZrSgBYn8')
        getDoc(ref).then((snapshot)=>{if(snapshot.exists()){
            setItems([{id:snapshot.id,...snapshot.data()}])
        }})
        .catch((err)=> console.log(err.msg))
    },[]) */

    return (
        <div className="container text-center my-3 alert alert-dark bg-dark text-primary"> 
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer;