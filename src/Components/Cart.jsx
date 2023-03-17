import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import trash from './images/icons/trash3-fill.svg'

const Cart =  () => {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [orderId, setOrderId] = useState ('')
    const {cart, cartTotal, removeItem, clear, cartSum} = useContext(CartContext)

    const generarOrden = () => {
        const buyer = {name:nombre, email:email, phone:telefono}
        const fecha = new Date ()
        const date = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}-${fecha.getHours()}-${fecha.getMinutes()}-${fecha.getSeconds()}`
        const order = {buyer:buyer, items:cart, date:date, total:cartTotal()}

        const db = getFirestore()
        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id)
        })
    }

    if (cartTotal() === 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="alert alert-warning text-center" role="alert">
                            No se encontraron productos en el carrito.
                        </div>
                    </div>
                </div>
            </div>

        )
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="nombre" onInput={(e) => {setNombre(e.target.value)}}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="text" class="form-control" id="email" onInput={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Telefono</label>
                        <input type="text" class="form-control" id="telefono" onInput={(e) => {setTelefono(e.target.value)}}/>
                    </div>
                    <button type="button" class="btn btn-primary" onClick={generarOrden}>Realizar Orden</button>
                    </form>
                </div>
                <div className="col-md-8">
                    <table className='table'>
                        <tbody>
                            <tr>
                                <td className='text-end' colSpan={5}><Link className="btn btn-warning" onClick={() => {clear()}}>Vaciar Carrito</Link></td>
                            </tr>
                        {
                            cart.map(juegos => (
                                <tr key={juegos.index}>
                                    <td className="text-start" width='10%'><img src={juegos.image} alt={juegos.title} width={200} /></td>
                                    <td className="text-start" width='40%'>{juegos.title}</td>
                                    <td className="text-start" width='20%'>{juegos.quantity} x {juegos.price}</td>
                                    <td className="text-start" width='20%'>${juegos.quantity*juegos.price}</td>
                                    <td className="text-end" width='10%' type="button"><Link onClick={() => {removeItem(juegos.index)}} title={'Eliminar producto'}><img src={trash} alt= {'eliminar producto'} width={32}/></Link></td>
                                </tr>))  
                        }
                        </tbody>
                        <tr>
                            <td colSpan={2}>&nbsp;</td>
                            <td className="text-center">Total a Pagar:</td>
                            <td className="text-center"><b>${cartSum()}</b></td>
                            <td>&nbsp;</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    {orderId ? <div class="alert alert-info text-center mt-4" role="alert">
                    <h3>Gracias por tu compra!</h3> <p>Tu numero de compra es: <b>{orderId}</b></p>
                    </div> : ''}
                </div>
            </div>
        </div>
    )
}
export default Cart;