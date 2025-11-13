import Project from '@/components/shared/project/Project';

import { useAppContext } from '@/contexts/useAppContext';

import './PersonalProjects.scss';

const PersonalProjects = () => {
	const { portfolio } = useAppContext() || {};
	const projects = portfolio?.personalProjects;

	if (!projects) return;

	const renderProject = (project: IProject) => {
		const { id } = project;
		return <Project key={id} {...project} />;
	};

	return <div className="personal-projects">{projects.map(renderProject)}</div>;
};

export default PersonalProjects;
