import { Card } from '../../components';
import { useProducts } from '../../hooks';
import './Home.css';

export const Home = () => {
	const products = useProducts();
	return (
		<div className="home-structure">
			<img
				className="home-img"
				src="https://s3-alpha-sig.figma.com/img/9d58/d0fd/1731b288203acac3b31cdcf78415d265?Expires=1698019200&Signature=ACJqCVT-P6E8G1tMeYrJ0YQNDjNWDfLJKp9PudCekB2yx09drENtBpo~CRn2eXsAGCwHdDbVVZtgVB5Cnk3Bvvshi5gXpk29HQ2wglQfui6Rz8ErzF5A0-eTSy0nTcXe5FZ-Wx84CkfP4T~gP8D22IEqjsqjJR-rjGHt6ZuQH9CiPD2vkn3grv-2auIP~N0LPpdpy3FEnvEGtWs~hLl89vpPn2uv9-zQ1KBt5nw2EE2Y-3whHR~NEDa6N5lnJUQTt1u9aGMPm2leD4yzWPC1fDldY6dvkxG2cG9dcSGNvR25Tyo6JQm5o8ktJiMy8GfBMn4jVh3rqXbNeKt6H5o0nQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
			/>
			<h1 className="home-title">The best ecommerce ever</h1>
			<h2 className="home-description">
				Esto es una recontra descripción re copadita sobre la landing que te hará saber sobre que
				trata la landing de forma re copadita.
			</h2>
			<div className="home-featured-products">
				<h3 className="featured-products-title">Featured products</h3>
				<div className="featured-products-display">
					{products &&
						products.map((product) => {
							if (product.rating >= 4.9) {
								return <Card props={product} />;
							}
						})}
				</div>
			</div>
		</div>
	);
};
