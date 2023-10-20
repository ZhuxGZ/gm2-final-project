import "./CardView.css"
import { Card } from "..";
import { useProducts } from "../../hooks";

export const CardView = () => {
    const products = useProducts()

    console.log(products)
    return (
        < div className="cards-container" >
            {products?.map((product) => {
                return < Card props={product} />

            })}
        </div >
    )
}