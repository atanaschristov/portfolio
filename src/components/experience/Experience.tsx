import cn from 'classnames';
import Period from '../shared/period/Period';
import Project from '@/components/shared/project/Project';

import { faHandPointLeft as projectButtonPointer } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppContext } from '@/contexts/useAppContext';
import { useBemm as useBem } from 'bemm';
import { useEffect, useState } from 'react';

import './Experience.scss';

const Experience = () => {
	const b = useBem('experience');
	const { portfolio } = useAppContext() || {};
	const experience = portfolio?.experience;
	const [projectsExtended, setProjectsExtended] = useState<{ [experienceId: string]: boolean }>(
		{},
	);

	useEffect(() => {
		if (experience) {
			const initialProjectsState: { [experienceId: string]: boolean } = {};
			experience.forEach((exp) => {
				initialProjectsState[exp.id] = false;
			});
			setProjectsExtended(initialProjectsState);
		}
	}, [experience]);

	if (!experience) return;

	const renderProject = (project: IProject) => {
		const { id, etc } = project;
		return (
			<>
				<Project key={id} {...project} />
				{etc && (
					<div className={cn(b('section-projects-section-etc'))} key={id}>
						{etc.endsWith('...') ? etc : `${etc}...`}
					</div>
				)}
			</>
		);
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
				<Period start={period.start} end={period.end} />
				{responsibilities && responsibilities.length > 0 && (
					<div className={cn(b('section-responsibilities'))}>
						<div className={cn(b('section-responsibilities-heading'))}>Responsibilities</div>
						{responsibilities.map(renderResponsibility)}
					</div>
				)}
				{projects && projects.length > 0 && (
					<div className={cn(b('section-projects'))}>
						<button
							className={cn(b('section-projects-heading'))}
							onClick={() => {
								setProjectsExtended((prevState) => ({
									...prevState,
									[id]: !prevState[id],
								}));
							}}
						>
							Projects
							<FontAwesomeIcon
								icon={projectButtonPointer}
								className={cn(
									b('section-projects-heading-icon'),
									b('section-projects-heading-icon', { extended: projectsExtended[id] }),
								)}
							/>
						</button>
						<div
							className={cn(
								b('section-projects-section'),
								b('section-projects-section', { extended: projectsExtended[id] }),
							)}
						>
							{projects.map(renderProject)}
						</div>
					</div>
				)}
			</div>
		);
	};

	experience.map(renderExperience);

	return <div className={cn(b())}>{experience.map(renderExperience)}</div>;
};

export default Experience;
