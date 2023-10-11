import './Table.css'
export const Table = () => {
    return (
        <div className="table-view">
            <div className="img-table-div border">
                <img className="img-table" />
            </div>
            <div className="title-table-div border">
                <h2 className="title-table">NAME</h2>
            </div>
            <div className="description-table-div border">
                <h2 className="description-table">DESCRIPTION</h2>
            </div>
            <div className="price-table-div border">
                <h2 className="price-table">PRICE</h2>
            </div>

        </div>
    )
}