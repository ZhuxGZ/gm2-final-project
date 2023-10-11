import "./Card.css"

export const Card = () => {
    return (
        <>
            <div className="structure-card">
                <div className="img-rating-container">
                    <img className="card-img" src="https://i.pinimg.com/564x/a1/58/1c/a1581ccebc3e55ab4502a0fc4102a3da.jpg" />
                    <p className="card-rating">#1</p>
                </div>
                <div className="card-info">
                    <h1 className="product-name">Messi Culiplancheo</h1>
                    <div className="product-number-data">
                        <div className="prices">
                            <p className="original-price">$10</p>
                            <p className="price-with-discount">$5</p>
                            <p className="stock">Stock: 20</p>
                        </div>
                    </div>
                </div>
                <div className="card-buttons">
                    <button className="buttons-container">Wishlist</button>
                    <button className="buttons-container">Cart</button>
                </div>
            </div>
        </>
    )
}

