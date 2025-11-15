import cn from 'classnames';
import CarouselButton from './CarouselButton';
import Images from './Images';

import { memo, useCallback, useMemo, useState } from 'react';
import { useAppContext } from '@/contexts/useAppContext';
import { useBemm as useBem } from 'bemm';

import './ImageCarousel.scss';

const ImageCarousel = memo(() => {
	const b = useBem('image-carousel');
	const { portfolio } = useAppContext() || {};
	const { personalInfo } = portfolio || {};

	const pictures = useMemo(() => {
		return personalInfo?.pictures || [];
	}, [personalInfo?.pictures]);

	const [buttonsInvisible, setButtonsInvisible] = useState(true);
	const [selected, setSelected] = useState(0);

	const handleMouseEnter = useCallback(() => setButtonsInvisible(false), []);
	const handleMouseLeave = useCallback(() => setButtonsInvisible(true), []);

	// TODO: needs improvement. capping the index calculation ,
	// adding transition effects to left and right like a real carousel
	const onClick = useCallback(
		(direction: Direction) => {
			switch (direction) {
				case 'left':
					setSelected(selected - 1);
					break;
				case 'right':
					setSelected(selected + 1);
					break;
				default:
					break;
			}
		},
		[selected, pictures.length],
	);

	return (
		<div className={cn(b())} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			{pictures.length > 1 && (
				<CarouselButton
					className={cn(b('', { 'button-invisible': buttonsInvisible }))}
					direction="left"
					onClick={() => onClick('left')}
				/>
			)}
			<Images selected={selected} imageUrls={pictures} />
			{pictures.length > 1 && (
				<CarouselButton
					className={cn(b('', { 'button-invisible': buttonsInvisible }))}
					direction="right"
					onClick={() => onClick('right')}
				/>
			)}
		</div>
	);
});

export default ImageCarousel;
