import './Product.css';

export const Product = () => {
	return (
		<section className="prod-page">
			<section className="prod-container">
				<section className="prod-images">
					<section className="prod-main-image"></section>
					<section className="prod-all-image">
						<div className="all-image-image"></div>
						<div className="all-image-image"></div>
						<div className="all-image-image"></div>
						<div className="all-image-image"></div>
					</section>
				</section>
				<section className="prod-info">
					<h3 className="prod-info-title">Prod Name</h3>
					<p className="prod-info-description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates veritatis facilis
						laboriosam excepturi modi iste voluptatum suscipit, quae quis necessitatibus fugit sit
						dignissimos repellendus
					</p>
					<section className="prod-bottom">
						<section className="prod-prices">
							<p className="prod-info-price">$800</p>
							<p className="prod-info-discount">$200</p>
						</section>
						<section className="prod-buttons">
							<button className="prod-add-to-favorite">Add to favorites</button>
							<button className="prod-buy">Buy</button>
						</section>
					</section>
				</section>
			</section>
		</section>
	);
};
