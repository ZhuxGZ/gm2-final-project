import "./CardView.css"
import { useEffect, useState } from "react";
import { Card } from "..";
const productApi = "https://dummyjson.com/products";

export const CardView = () => {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        fetch(productApi)
            .then((response) => response.json())
            .then((data) => setProductsData(data.results));
    });

    return productsData?.map((product) => {
        return (
            <>
                <div className="cardView-content">
                    <div className="category-container">
                        <h2 className="category-name">Hola mundo</h2>
                        <div className="cards-container">
                            <div>
                                <Card />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    })

}