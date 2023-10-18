import { useEffect, useState } from "react";
import { CardView } from "../../components/CardView";
import { Table } from "../../components/Table";

export const WhisList = () => {
    const [currentView, setCurrentView] = useState('CardView');


    const toggleView = () => {
        setCurrentView(currentView === 'CardView' ? 'Table' : 'CardView');
    };

    return (
        <div className='change-views-content'>
            <button className='change-button' onClick={toggleView}>Change View</button>
            <div className="views-container">
                {currentView === 'CardView' && <CardView />}
                {currentView === 'Table' && <Table />}
            </div>
        </div>
    );
}