import cn from 'classnames';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import LeftColumn from '@/components/viewWeb/leftColumn/LeftColumn';
import RightColumn from '@/components/viewWeb/rightColumn/RightColumn';

import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useBemm as useBem } from 'bemm';

import './ViewWeb.scss';

interface ViewWebProps {
	togglePrintMode: () => void;
}

const ViewWeb = ({ togglePrintMode }: ViewWebProps) => {
	const b = useBem('web-view');

	return (
		<div className={cn(b())}>
			<header className={cn(b('header'))}>
				<div className={cn(b('header', 'inner'))}>
					<Header />
				</div>
				<button
					className={cn(b('print-button'))}
					onClick={() => {
						togglePrintMode();
					}}
				>
					<FontAwesomeIcon icon={faPrint} />
				</button>
			</header>
			<div className={cn(b('content'))}>
				<div className={cn(b('content', 'inner'))}>
					<LeftColumn />
					<RightColumn />
				</div>
			</div>
			<footer className={cn(b('footer'))}>
				<div className={cn(b('footer', 'inner'))}>
					<Footer />
				</div>
			</footer>
		</div>
	);
};

export default ViewWeb;
