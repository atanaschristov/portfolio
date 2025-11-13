import cn from 'classnames';

import { faBookmark, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useBemm as useBem } from 'bemm';
import { useCallback } from 'react';

type ProjectProps = IProject;

const Project = ({ name, description, technologies, url, repo }: ProjectProps) => {
	const b = useBem('project');

	const renderTechnologies = useCallback(() => {
		if (!technologies || technologies.length === 0) return undefined;

		return technologies.map((item) => <div key={item.replace(' ', '')}>{item}</div>);
	}, [technologies]);

	return (
		<div className={cn(b())}>
			<div className={cn(b('name'))}>
				<FontAwesomeIcon icon={faBookmark} />
				{name}
			</div>
			<div className={cn(b('description'))}>{description}</div>
			<div className={cn(b('technologies'))}>
				<div className={cn(b('technologies-heading'))}>
					<FontAwesomeIcon icon={faPaperPlane} />
					Technologies:
				</div>
				<div className={cn(b('technologies-list'))}>{renderTechnologies()}</div>
			</div>
			{(url || repo) && (
				<div className={cn(b('links'))}>
					<FontAwesomeIcon icon={faLink} />
					Links:
				</div>
			)}
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
