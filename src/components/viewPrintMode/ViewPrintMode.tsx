import cn from 'classnames';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Section from '@/components/shared/section/Section';
import Education from '@/components/education/Education';
import Experience from '@/components/experience/Experience';
import Skills from '@/components/skills/Skills';

import {
	faUserGraduate as educationIcon,
	faScrewdriverWrench as workIcon,
} from '@fortawesome/free-solid-svg-icons';
import { createRoot } from 'react-dom/client';
import { memo, useCallback, useEffect } from 'react';
import { useBemm as useBem } from 'bemm';
import { usePrintModeContext } from '@/contexts/usePrintModeContext';

import './ViewPrintMode.scss';

interface ViewPrintModeProps {
	togglePrintMode: () => void;
}

const ViewPrintMode = memo(({ togglePrintMode }: ViewPrintModeProps) => {
	const b = useBem('print-root');

	const isPrintMode = usePrintModeContext();

	const renderContent = useCallback(
		() => (
			<>
				<header className={cn(b('header'))}>
					<div className={cn(b('header', 'inner'))}>
						<Header />
					</div>
				</header>
				<div className={cn(b('content'))}>
					<div className={cn(b('content', 'inner'))}>
						<Section title="experience" icon={workIcon}>
							<Experience />
						</Section>
					</div>
					<div className={cn(b('content', 'inner'))}>
						<Section title="experience" icon={workIcon}>
							<Skills />
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
		),
		[isPrintMode],
	);

	useEffect(() => {
		if (!isPrintMode) return;

		const printRootNode = document.getElementById('print-mode-template');
		if (!printRootNode) return;

		const root = createRoot(printRootNode);
		root.render(<>{renderContent()}</>);

		// NOTE: Seems like a dirty hack but needed to make sure we handle onafterprint only once
		// multiple browsers fire the onafterprint differently and chrome and safari fire it
		// multiple times as well
		let handled = false;

		window.onafterprint = () => {
			if (handled) return;
			handled = true;

			root.unmount();
			togglePrintMode();
			window.onafterprint = null;
		};

		requestAnimationFrame(() => {
			printRootNode.getBoundingClientRect();

			requestAnimationFrame(() => {
				window.print();
			});
		});

		return () => {
			// Safety: cleanup if unmounted early
			root?.unmount();
			window.onafterprint = null;
		};
	}, [isPrintMode]);

	return <div className={cn(b())}>{renderContent()}</div>;
});

export default ViewPrintMode;
