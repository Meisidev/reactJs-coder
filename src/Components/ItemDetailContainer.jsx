import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import arrayJuegos from "./json/juegos.json"

const ItemDetailContainer = () => {
    const [item,setItem] = useState({})
    const {id} = useParams()

    useEffect (() => {
        const promise = new Promise((resolve)=> {
            setTimeout (()=>{
                resolve(arrayJuegos.find(juegos => juegos.id === parseInt(id)))
            },2000)
        })
        promise.then ((respuesta)=>{
            setItem(respuesta)
        })
    }, [id])
    return (
        <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer