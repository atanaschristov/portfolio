import cn from 'classnames';
import Interests from '@/components/interests/Interests';
import Languages from '@/components/languages/Languages';
import PersonalProjects from '@/components//personalProjects/PersonalProjects';
import Section from '@/components/shared/section/Section';
import Skills from '@/components/skills/Skills';

import {
	faEarthAmericas as languagesIcon,
	faScrewdriverWrench as skillsIcon,
	faCubes as interestsIcon,
	// faFileCode as projectsIcon,
	faFolderOpen as projectsIcon,
} from '@fortawesome/free-solid-svg-icons';
// import { faFileCode as projectsIcon } from '@fortawesome/free-regular-svg-icons';
import { memo } from 'react';
import { useBemm as useBem } from 'bemm';

import './RightColumn.scss';

const RightColumn = memo(() => {
	const b = useBem('right-column');
	return (
		<div className={cn(b())}>
			<Section title="skills" icon={skillsIcon}>
				<Skills />
			</Section>
			<Section title="Projects" icon={projectsIcon}>
				<PersonalProjects />
			</Section>
			<Section title="languages" icon={languagesIcon}>
				<Languages />
			</Section>
			<Section title="interests" icon={interestsIcon}>
				<Interests />
			</Section>
		</div>
	);
});

export default RightColumn;
