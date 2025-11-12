import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './LoadingScreen.scss';

const LoadingScreen = () => {
	return (
		<div className="loading-screen">
			<FontAwesomeIcon icon={faGear} spin />
			<div>LOADING...</div>
		</div>
	);
};

export default LoadingScreen;
