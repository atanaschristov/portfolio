import cn from 'classnames';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Section from '@/components/shared/section/Section';
import Education from '@/components/education/Education';
import Experience from '@/components/experience/Experience';
import Skills from '@/components/skills/Skills';

import { useBemm as useBem } from 'bemm';

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
				<div className={cn(b('content', 'inner'))}>
					<Section title="experience">
						<Experience />
					</Section>
				</div>

				<div className={cn(b('content', 'inner'))}>
					<Section title="skills">
						<Skills />
					</Section>
				</div>

				<div className={cn(b('content', 'inner'))}>
					<Section title="education">
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
