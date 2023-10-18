import "./CardView.css"
import { useEffect, useState } from "react";
import { Card } from "..";
import { useProducts } from "../../hooks";
const productApi = "https://dummyjson.com/products";

export const CardView = () => {
    const products = useProducts()

    console.log(products)
    return (
        < div className="cards-container" >
            {products?.map((product) => {
                return < Card />

            })}
        </div >
    )
}