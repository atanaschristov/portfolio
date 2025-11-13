import cn from 'classnames';
import Education from '@/components/education/Education';
import Experience from '@/components/experience/Experience';
import Section from '@/components/shared/section/Section';

import {
	faUserGraduate as educationIcon,
	faScrewdriverWrench as workIcon,
} from '@fortawesome/free-solid-svg-icons';
import { useBemm as useBem } from 'bemm';

import './LeftColumn.scss';

const RightColumn = () => {
	const b = useBem('left-column');
	return (
		<div className={cn(b())}>
			<Section title="experience" icon={workIcon}>
				<Experience />
			</Section>
			<Section title="education" icon={educationIcon}>
				<Education />
			</Section>
		</div>
	);
};

export default RightColumn;
