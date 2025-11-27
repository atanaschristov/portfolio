import cn from 'classnames';

import { useAppContext } from '@/contexts/useAppContext';
import { useBemm as useBem } from 'bemm';
import { usePrintModeContext } from '@/contexts/usePrintModeContext';

import './Footer.scss';

const Footer = () => {
	const { generatedAt, portfolio } = useAppContext() || {};

	const b = useBem('footer');
	const disclaimer = portfolio?.disclaimer || '';
	const { isPrintMode } = usePrintModeContext();

	return (
		<>
			{!isPrintMode && (
				<div className={cn(b('info'))}>
					<div className={cn(b('info-item'))}>{generatedAt?.toLocaleDateString('de-DE')}</div>
					<div className={cn(b('info-item'))}>{APP_AUTHOR.name}</div>
				</div>
			)}
			<div className={cn(b('disclaimer'))}>{disclaimer}</div>
		</>
	);
};

export default Footer;
