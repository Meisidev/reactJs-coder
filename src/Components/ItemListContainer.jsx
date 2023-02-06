const ItemListContainer = ({greeting}) => {
    return (
        <div className="container text-center my-3 alert alert-dark bg-dark text-primary" role={alert}>
            
            <div className="row">
                <div className="col">
                    <h1>{greeting}</h1>
                </div>
            </div>
        </div>

    )
}

export default ItemListContainer