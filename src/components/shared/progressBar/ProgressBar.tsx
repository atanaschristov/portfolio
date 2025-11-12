import cn from 'classnames';

import { useBemm as useBem } from 'bemm';

import './ProgressBar.scss';

interface IProgressBarProps {
	level: number;
	maxLevel?: number;
	label?: string;
}

const DEFAULT_MAX_LEVEL = 10;

const ProgressBar = ({ label, level, maxLevel }: IProgressBarProps) => {
	const b = useBem('progress-bar');
	return (
		<div className={cn(b())}>
			<div
				className={cn(b('fill'), b('fill', { [label || level]: true }))}
				style={{ width: `${(level / (maxLevel || DEFAULT_MAX_LEVEL)) * 100}%` }}
			>
				{label || level}
			</div>
		</div>
	);
};

export default ProgressBar;
