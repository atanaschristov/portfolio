import cn from 'classnames';
import Footer from './footer/Footer';
import Header from '@/components/header/Header';
import LeftColumn from './leftColumn/LeftColumn';
import RightColumn from './rightColumn/RightColumn';

import { useBemm as useBem } from 'bemm';

import '@/components/App.scss';

interface InnerSectionProps {
	className: string;
	children: React.ReactNode;
}

const InnerSection = ({ className, children }: InnerSectionProps) => {
	const b = useBem('app');

	return <div className={cn(b(className, 'inner'))}>{children}</div>;
};
function App() {
	const b = useBem('app');

	return (
		<>
			<header className={cn(b('header'))}>
				<InnerSection className={'header'}>
					<Header />
				</InnerSection>
			</header>
			<div className={cn(b('content'))}>
				<InnerSection className="content">
					<LeftColumn />
					<RightColumn />
				</InnerSection>
			</div>
			<footer className={cn(b('footer'))}>
				<InnerSection className="footer">
					<Footer />
				</InnerSection>
			</footer>
		</>
	);
}

export default App;
