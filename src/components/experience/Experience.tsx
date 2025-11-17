import cn from 'classnames';
import CollapsableHOC from '../shared/collapsableHOC/CollapsableHOC';
import Period from '../shared/period/Period';
import Project from '@/components/shared/project/Project';

import { useAppContext } from '@/contexts/useAppContext';
import { useBemm as useBem } from 'bemm';
import { useCallback } from 'react';

import './Experience.scss';

const Experience = () => {
	const b = useBem('experience');
	const { portfolio } = useAppContext() || {};
	const experience = portfolio?.experience;

	const renderProject = useCallback((project: IProject) => {
		const { id, etc } = project;
		return (
			<>
				<Project key={id} {...project} />
				{etc && (
					<div className={cn(b('section-projects-etc'))} key={id}>
						{etc.endsWith('...') ? etc : `${etc}...`}
					</div>
				)}
			</>
		);
	}, []);

	const renderResponsibility = useCallback((responsibility: string) => {
		return <li key={responsibility}>{responsibility}</li>;
	}, []);

	const renderExperience = useCallback((experienceItem: IExperienceSection) => {
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
				<Period start={period.start} end={period.end} />
				{responsibilities && responsibilities.length > 0 && (
					<div className={cn(b('section-responsibilities'))}>
						<div className={cn(b('section-responsibilities-heading'))}>Responsibilities</div>
						{responsibilities.map(renderResponsibility)}
					</div>
				)}
				{projects && projects.length > 0 && (
					<CollapsableHOC heading="Projects" className={cn(b('section-projects'))}>
						{projects.map(renderProject)}
					</CollapsableHOC>
				)}
			</div>
		);
	}, []);

	if (!experience) return;

	experience.map(renderExperience);

	return <div className={cn(b())}>{experience.map(renderExperience)}</div>;
};

export default Experience;
