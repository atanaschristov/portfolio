import cn from 'classnames';

import { faHandPointLeft as projectButtonPointer } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useBemm as useBem } from 'bemm';
import { useCallback, useRef, useState } from 'react';

import './CollapsableHOC.scss';

interface CollapsableHOCProps {
	heading: string;
	children: React.ReactNode | undefined;
	className?: string;
}

const CollapsableHOC = ({ heading, children, className }: CollapsableHOCProps) => {
	const b = useBem('collapsable-section');
	const sectionRef = useRef<HTMLDivElement>(null);

	const [isExtended, setExtended] = useState<boolean>(false);

	const onClick = useCallback(() => {
		const section = sectionRef.current;
		if (!section) return;

		const full = section?.scrollHeight;
		section.style.height = full + 'px';

		if (isExtended) {
			// force repaint, so the animation can be triggered after setting
			// the length to scrollHeight and then to 0 (hack)
			void section.offsetHeight;

			section.style.height = '0px';
		} else {
			// sets the height to auto after the transition ends,
			// so the content can grow/shrink dynamically
			section?.addEventListener(
				'transitionend',
				() => {
					section.style.height = 'auto';
				},
				{ once: true },
			);
		}

		setExtended((prevState) => !prevState);
	}, [isExtended]);

	return (
		<div className={cn(b(), className)}>
			<button className={cn(b('heading'))} onClick={onClick}>
				{heading}
				<FontAwesomeIcon
					icon={projectButtonPointer}
					className={cn(b('heading-icon'), b('heading-icon', { extended: isExtended }))}
				/>
			</button>
			<div ref={sectionRef} className={cn(b('content'), b('content', { extended: isExtended }))}>
				{children}
			</div>
		</div>
	);
};

export default CollapsableHOC;
