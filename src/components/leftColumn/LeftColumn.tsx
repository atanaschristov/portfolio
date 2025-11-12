import cn from 'classnames';
import Education from './education/Education';
import Experience from './experience/Experience';
import PersonalProjects from './personalProjects/PersonalProjects';
import Section from '../shared/section/Section';

import {
	faUserGraduate as educationIcon,
	faScrewdriverWrench as workIcon,
	faCode as projectsIcon,
} from '@fortawesome/free-solid-svg-icons';
import { useBemm as useBem } from 'bemm';

import './LeftColumn.scss';

const RightColumn = () => {
	const b = useBem('left-column');
	return (
		<div className={cn(b())}>
			<Section title="projects" icon={projectsIcon}>
				<PersonalProjects />
				<hr />
			</Section>
			<Section title="experience" icon={workIcon}>
				<Experience />
				<hr />
			</Section>
			<Section title="education" icon={educationIcon}>
				<Education />
			</Section>
		</div>
	);
};

export default RightColumn;
