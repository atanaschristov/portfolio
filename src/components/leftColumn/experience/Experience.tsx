import cn from 'classnames';
import Project from '@/components/shared/project/Project';

import { useAppContext } from '@/contexts/useAppContext';
import { useBemm as useBem } from 'bemm';

import './Experience.scss';

const Experience = () => {
	const b = useBem('experience');
	const { portfolio } = useAppContext() || {};
	const experience = portfolio?.experience;

	if (!experience) return;

	const renderProject = (project: IProject) => {
		const { id } = project;
		return <Project key={id} {...project} />;
	};

	const renderResponsibility = (responsibility: string) => {
		return <li key={responsibility}>{responsibility}</li>;
	};

	const renderExperience = (experienceItem: IExperienceSection) => {
		const { id, company, companyUrl, projects, responsibilities, position, period } =
			experienceItem;
		return (
			<div className={cn(b('section'))} key={id}>
				<div className={cn(b('section-company'))}>
					{companyUrl ? (
						<a href={companyUrl} target="_blank" rel="noopener noreferrer">
							{company}
						</a>
					) : (
						company
					)}
				</div>
				<div className={cn(b('section-position'))}>{position}</div>
				<div className={cn(b('section-period'))}>
					<div>Start: {period.start}</div>
					<div>End: {period.end}</div>
				</div>
				{projects && projects.length > 0 && (
					<div className={cn(b('section-projects'))}>
						<div></div>
						{projects.map(renderProject)}
					</div>
				)}
				{responsibilities && responsibilities.length > 0 && (
					<ul className={cn(b('section-responsibilities'))}>
						{responsibilities.map(renderResponsibility)}
					</ul>
				)}
			</div>
		);
	};

	experience.map(renderExperience);

	return <div className={cn(b())}>{experience.map(renderExperience)}</div>;
};

export default Experience;
