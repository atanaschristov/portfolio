import cn from 'classnames';

import { useBemm as useBem } from 'bemm';

type ProjectProps = IProject;

const Project = ({ name, description, technologies, url, repo }: ProjectProps) => {
	const b = useBem('project');
	return (
		<div className={cn(b())}>
			<div className={cn(b('name'))}>{name}</div>
			<div className={cn(b('description'))}>{description}</div>
			<div className={cn(b('technologies'))}>Technologies: {technologies?.join(', ')}</div>
			{url && (
				<div className={cn(b('link'), b('link', { demo: true }))}>
					DEMO:{' '}
					<a href={url} target="_blank" rel="noopener noreferrer">
						{url}{' '}
					</a>
				</div>
			)}{' '}
			{repo && (
				<div className={cn(b('link'), b('link', { repo: true }))}>
					REPO:{' '}
					<a href={repo} target="_blank" rel="noopener noreferrer">
						{repo}{' '}
					</a>
				</div>
			)}
		</div>
	);
};

export default Project;
