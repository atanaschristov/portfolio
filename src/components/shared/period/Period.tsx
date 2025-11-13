import cn from 'classnames';

import { useBemm as useBem } from 'bemm';

import './Period.scss';

const Period = ({ start, end }: IPeriod) => {
	const b = useBem('period');
	return (
		<div className={cn(b())}>
			<div>Start: {start}</div>
			<div>End: {end || 'Present'}</div>
		</div>
	);
};

export default Period;
