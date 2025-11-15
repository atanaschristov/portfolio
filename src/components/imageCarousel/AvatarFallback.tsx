import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './AvatarFallback.scss';

const AvatarFallback = () => {
	return <FontAwesomeIcon className="avatar-fallback" icon={faCircleUser} />;
};

export default AvatarFallback;
