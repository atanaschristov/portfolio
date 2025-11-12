import cn from 'classnames';
import Interests from './interests/Interests';
import Languages from './languages/Languages';
import Skills from './skills/Skills';
import Section from '../shared/section/Section';

import { useBemm as useBem } from 'bemm';

import './RightColumn.scss';

const RightColumn = () => {
	const b = useBem('right-column');
	return (
		<div className={cn(b())}>
			<Section title="skills">
				<Skills />
			</Section>
			<Section title="languages">
				<Languages />
			</Section>
			<Section title="interests">
				<Interests />
			</Section>
		</div>
	);
};

export default RightColumn;
