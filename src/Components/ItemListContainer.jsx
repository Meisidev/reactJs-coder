import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import Loading from "./Loading";

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState([true])
    const {id} = useParams()

    useEffect (() => {
        const db = getFirestore()
        const itemsCollection = collection(db,'items')
        const filter = id ? query(itemsCollection, where('genre', '==', id)) : itemsCollection
        getDocs(filter).then(elements =>{
            setItems(elements.docs.map(element =>({id:element.id, ...element.data()})))
            setLoading(false)
        })
    },[id])

    return (
        <div className="container text-center my-3 alert alert-dark bg-dark text-primary"> 
        {loading ? <Loading /> : <ItemList items={items}/> }
            
        </div>
    )
}

export default ItemListContainer;