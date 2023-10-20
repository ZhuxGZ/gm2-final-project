import './Filter.css'
export const Filter = () => {
    return (

        <div className='content-filter'>
            <div className='filter-title'>
                <h2>Filters</h2>
            </div>
            <div className='filter-description container-filter filter-center'>
                <h3>Name Descripton Brand</h3>
                <input type="text" />
            </div>
            <div className='filter-minprice container-filter filter-center'>
                <h3>Min Price</h3>
                <input type="range" />
            </div>
            <div className='filter-maxprice container-filter filter-center'>
                <h3>Max Price</h3>
                <input type="range" />
            </div>
            <div className='filter-categories container-filter filter-center'>
                <h3>Categories</h3>
                <select name="" id=""><option value="">hola</option><option value="">mundo</option></select>
            </div>
        </div>

    )
}