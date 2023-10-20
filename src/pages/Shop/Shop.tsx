import { CardView } from '../../components/CardView';
import { Filter } from '../../components';
import { useState } from "react";

import './Shop.css';

export const Shop = () => {
    const [searchTerm, setSearchText] = useState([]);
    return (
        <section className="shop-page">
            <Filter setSearchText={setSearchText} />
            <CardView />
        </section>
    );
};
