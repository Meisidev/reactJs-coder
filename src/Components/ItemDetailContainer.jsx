import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import arrayJuegos from "./json/juegos.json"

const ItemDetailContainer = () => {
    const [item,setItem] = useState({})

    useEffect (() => {
        const promise = new Promise((resolve)=> {
            setTimeout (()=>{
                resolve(arrayJuegos.find(juegos => juegos.id === 2))
            },2000)
        })
        promise.then ((respuesta)=>{
            setItem(respuesta)
        })
    }, [])
    return (
        <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer