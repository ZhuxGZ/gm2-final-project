    import './Shop.css';
    import { useState } from "react";
    import { Filter } from '../../components';
    import { CardView } from '../../components/CardView';
    import { useProducts } from '../../hooks';

    export const Shop = () => {
        const [searchTerm, setSearchText] = useState([]);
      
        const products = useProducts();
        const filteredProducts = products.filter((product) =>
          product.name && searchTerm && product.name.includes(searchTerm)
        );
      
        return (
          <section className="shop-page">
            <Filter setSearchText={setSearchText} />
            <CardView product={filteredProducts} />
          </section>
        );
      }; 
