import "./Card.css"

export const Card = () => {
    return (
        <>
            <div className="structure-card">
                <div className="card-img&rating">
                    <img className="card-img" src="https://i.pinimg.com/564x/a1/58/1c/a1581ccebc3e55ab4502a0fc4102a3da.jpg" />
                    <p className="card-rating">#1</p>
                </div>
                <div className="card-info">
                    <h1 className="product-name">Messi culiplancheo</h1>
                    <div className="prices">
                        <p className="original-price">$10</p>
                        <p className="price-with-discount">$5</p>
                        <p className="stock">unidades disponibles: 20</p>
                    </div>
                </div>
            </div>
        </>
    )
}

