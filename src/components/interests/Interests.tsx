import cn from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faAsterisk as fallbackIcon,
	faPersonHiking as trackingIcon,
	faRoad as travelIcon,
	faBookOpenReader as readingIcon,
	faGhost as gameIcon,
} from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from '@/contexts/useAppContext';
import { useBemm as useBem } from 'bemm';

import './Interests.scss';

const SECTION = 'interests';

const Interests = () => {
	const b = useBem(SECTION);
	const { portfolio } = useAppContext() || {};
	const interests = portfolio?.interests;

	if (!interests) return;

	const renderInterests = (interest: string) => {
		const icon = (() => {
			if (interest.toLowerCase().includes('track')) return trackingIcon;
			if (interest.toLowerCase().includes('travel')) return travelIcon;
			if (interest.toLowerCase().includes('read')) return readingIcon;
			if (interest.toLowerCase().includes('game')) return gameIcon;
		})();

		return (
			<div className={cn(b('item'))} key={interest.replace(' ', '')}>
				<span className={cn(b('item-icon'))}>
					<FontAwesomeIcon icon={icon || fallbackIcon} />
				</span>
				<span className={cn(b('item-label'))}>{interest}</span>
			</div>
		);
	};

	return <div className={cn(b())}>{interests.map(renderInterests)}</div>;
};
export default Interests;
