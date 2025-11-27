import cn from 'classnames';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Section from '@/components/shared/section/Section';
import Education from '@/components/education/Education';
import Experience from '@/components/experience/Experience';
import Languages from '@/components/languages/Languages';
import Skills from '@/components/skills/Skills';

import {
	faUserGraduate as educationIcon,
	faScrewdriverWrench as skillsIcon,
	faAward as experienceIcon,
} from '@fortawesome/free-solid-svg-icons';
import { useBemm as useBem } from 'bemm';

import './PrintContent.scss';

const PrintContent = () => {
	const b = useBem('print-mode-view');
	return (
		<>
			<header className={cn(b('header'))}>
				<div className={cn(b('header', 'inner'))}>
					<Header />
				</div>
			</header>
			<div className={cn(b('content'))}>
				<div className={cn(b('bars', 'inner'))}>
					<Section title="skills" icon={skillsIcon}>
						<Skills />
					</Section>
					<Section title="languages" icon={skillsIcon}>
						<Languages />
					</Section>
				</div>
				<div className={cn(b('content', 'inner'))}>
					<Section title="experience" icon={experienceIcon}>
						<Experience />
					</Section>
				</div>
				<div className={cn(b('content', 'inner'))}>
					<Section title="education" icon={educationIcon}>
						<Education />
					</Section>
				</div>
			</div>
			<footer className={cn(b('footer'))}>
				<div className={cn(b('footer', 'inner'))}>
					<Footer />
				</div>
			</footer>
		</>
	);
};
export default PrintContent;
