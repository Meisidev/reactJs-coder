import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import trash from './images/icons/trash3-fill.svg'

const Cart =  () => {
    const {cart, cartTotal, removeItem, clear, cartSum} = useContext(CartContext)

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
                <div className="col-md-12">
                  { <table className='table'>
                        <tbody>
                            <tr>
                                <td className='text-end' colSpan={5}><Link className="btn btn-warning" onClick={() => {clear()}}>Vaciar Carrito</Link></td>
                            </tr>
                        {
                            cart.map(juegos => (
                                <tr key={juegos.id}>
                                    <td className="text-start" width='10%'><img src={juegos.image} alt={juegos.title} width={200} /></td>
                                    <td className="text-start" width='40%'>{juegos.title}</td>
                                    <td className="text-start" width='20%'>{juegos.quantity} x {juegos.price}</td>
                                    <td className="text-start" width='20%'>${juegos.quantity*juegos.price}</td>
                                    <td className="text-end" width='10%' type="button"><Link onClick={() => {removeItem(juegos.id)}} title={'Eliminar producto'}><img src={trash} alt= {'eliminar producto'} width={32}/></Link></td>
                                </tr>))  
                        }
                        </tbody>
                        <tr>
                            <td colSpan={2}>&nbsp;</td>
                            <td className="text-center">Total a Pagar:</td>
                            <td className="text-center"><b>${cartSum()}</b></td>
                            <td>&nbsp;</td>
                        </tr>
                   </table>}
                </div>
            </div>
        </div>
    )
}
export default Cart;