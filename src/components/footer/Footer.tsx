import cn from 'classnames';

import { useAppContext } from '@/contexts/useAppContext';
import { useBemm as useBem } from 'bemm';

import './Footer.scss';

const Footer = () => {
	const b = useBem('footer');

	const { generatedAt, portfolio } = useAppContext() || {};
	const disclaimer = portfolio?.disclaimer || '';

	return (
		<>
			<div className={cn(b('info'))}>
				<div className={cn(b('info-item'))}>{generatedAt?.toLocaleDateString('de-DE')}</div>
				<div className={cn(b('info-item'))}>{APP_AUTHOR.name}</div>
			</div>
			<div className={cn(b('disclaimer'))}>{disclaimer}</div>
		</>
	);
};

export default Footer;
