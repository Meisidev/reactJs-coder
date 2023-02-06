import carrito from './images/cart.svg'

const CartWidget = () => {
    return (
        <button type="button" className="btn btn-info position-relative">
            <img src={carrito} alt= {'cart'} width= {24}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                1
            </span>
        </button>
    )
}

export default CartWidget;