import { Card } from '..';
import './CardView.css';
import { useProducts } from '../../hooks';

export const CardView = ({filteredProducts}) => {
    const products = useProducts();;

    return (
        <div className="cards-container">
            {products?.map((product) => {
                return <Card key={product.id} props={product} />;
            })}
        </div>
    );
};