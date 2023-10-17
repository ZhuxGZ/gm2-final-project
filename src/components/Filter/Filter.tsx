import './Filter.css'
export const Filter = () => {
    return (
        <div className='content-filter'>
            <h2>Filters</h2>
            <div className='filter-description container-filter'>
                <h2>Name Descripton Brand</h2>
                <input type="text" />
            </div>
            <div className='filter-minprice container-filter'>
                <h2>Min Price</h2>
                <input type="range" />
            </div>
            <div className='filter-maxprice container-filter'>
                <h2>Max Price</h2>
                <input type="range" />
            </div>
            <div className='filter-categories container-filter'>
                <h2>Categories</h2>
                <select name="saiufbasbdhjab" id=""><option value="aidufhiasdfiyghsuidfhuisadhfuishauidfh"></option><option value="penex2"></option></select>
            </div>
        </div>

    )
}