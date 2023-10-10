import { useParams } from 'react-router-dom';
import './Product.css';

export const Product = () => {
	const { id } = useParams();

	return (
		<section className="prod-container">
			<section className="prod-image"></section>
			<section className="prod-info">
				<h3 className="prod-info-title">Prod Name</h3>
			</section>
		</section>
	);
};
