import cn from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useBemm as useBem } from 'bemm';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export type SectionPosition = 'left' | 'right';

interface LSectionProps {
	children: React.ReactNode | undefined;
	title: string;
	icon?: IconProp;
}

const Section = ({ icon, title, children }: LSectionProps) => {
	const b = useBem('section');

	return (
		<section className={cn(b())}>
			<div className={cn(b('title'))}>
				{icon && <span className={cn(b('title-icon'))}>{<FontAwesomeIcon icon={icon} />}</span>}
				<span className={cn(b('title-text'))}>{title.toUpperCase()}</span>
			</div>
			<>{children}</>
		</section>
	);
};

export default Section;
