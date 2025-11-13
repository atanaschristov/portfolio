import cn from 'classnames';
import Interests from '@/components/interests/Interests';
import Languages from '@/components/languages/Languages';
import PersonalProjects from '@/components//personalProjects/PersonalProjects';
import Section from '@/components/shared/section/Section';
import Skills from '@/components/skills/Skills';

import { memo } from 'react';
import { useBemm as useBem } from 'bemm';

import './RightColumn.scss';

const RightColumn = memo(() => {
	const b = useBem('right-column');
	return (
		<div className={cn(b())}>
			<Section title="skills">
				<Skills />
			</Section>
			<Section title="Projects">
				<PersonalProjects />
			</Section>
			<Section title="languages">
				<Languages />
			</Section>
			<Section title="interests">
				<Interests />
			</Section>
		</div>
	);
});

export default RightColumn;
