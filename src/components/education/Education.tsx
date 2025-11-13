import cn from 'classnames';
import Period from '../shared/period/Period';

import { useAppContext } from '@/contexts/useAppContext';
import { useBemm as useBem } from 'bemm';

import './Education.scss';

const Education = () => {
	const b = useBem('education');
	const { portfolio } = useAppContext() || {};
	const education = portfolio?.education;

	if (!education) return;

	const renderEducation = (edu: IEducationSection) => {
		const { id, institution, degree, period, subjects, url } = edu;

		return (
			<div className={cn(b('item'))} key={id}>
				<div className={cn(b('item-institution'))}>
					{url ? (
						<a href={url} target="_blank" rel="noopener noreferrer">
							{institution}
						</a>
					) : (
						institution
					)}
				</div>
				<div className={cn(b('item-degree'))}>{degree}</div>
				<Period start={period.start} end={period.end} />
				{subjects && <div className={cn(b('item-subjects'))}>{subjects.join(', ')}</div>}
			</div>
		);
	};

	return <div className={cn(b())}>{education.map(renderEducation)}</div>;
};

export default Education;
