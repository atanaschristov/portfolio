import cn from 'classnames';

import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo } from 'react';
import { useBemm as useBem } from 'bemm';

import './CarouselButton.scss';

interface CarouselButtonProps {
	className?: string;
	direction: Direction;
	onClick: () => void;
}

const CarouselButton = memo(({ className = '', direction, onClick }: CarouselButtonProps) => {
	const bem = useBem('carousel-button');

	return (
		<button
			className={cn(className, bem(), bem('', direction))}
			onClick={onClick}
			aria-label={`Scroll ${direction}`}
		>
			<FontAwesomeIcon
				icon={faPlay}
				style={{ transform: direction === 'left' ? 'rotate(180deg)' : '' }}
			/>
		</button>
	);
});

export default CarouselButton;
