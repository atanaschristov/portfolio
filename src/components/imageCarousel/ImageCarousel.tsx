import cn from 'classnames';
import CarouselButton from './CarouselButton';
import Images from './Images';

import { memo, useCallback, useMemo, useState } from 'react';
import { useAppContext } from '@/contexts/useAppContext';
import { useAvatarImageContext } from '@/contexts/useAvatarImageContext';
import { useBemm as useBem } from 'bemm';
import { usePrintModeContext } from '@/contexts/usePrintModeContext';

import './ImageCarousel.scss';

const ImageCarousel = memo(() => {
	const b = useBem('image-carousel');
	const { isPrintMode } = usePrintModeContext();
	const {selectedImageIndex, setSelectedImageIndex } = useAvatarImageContext() || {
		selectedImageIndex: 0,
		setSelectedImageIndex: undefined,
	};
	const { portfolio } = useAppContext() || {};
	const { personalInfo } = portfolio || {};

	const pictures = useMemo(() => {
		return personalInfo?.pictures || [];
	}, [personalInfo?.pictures]);

	const [buttonsInvisible, setButtonsInvisible] = useState(true);

	const handleMouseEnter = useCallback(() => setButtonsInvisible(false), []);
	const handleMouseLeave = useCallback(() => setButtonsInvisible(true), []);

	// TODO: adding transition effects to left and right like a real carousel
	const onClick = useCallback(
		(direction: Direction) => {
			switch (direction) {
				case 'left':
					setSelectedImageIndex?.((prevSelectedIndex: number) => (prevSelectedIndex - 1 + pictures.length)%pictures.length);
					break;
				case 'right':
					setSelectedImageIndex?.((prevSelectedIndex: number) => (prevSelectedIndex + 1)%pictures.length);
					break;
				default:
					break;
			}
		},
		[pictures.length, setSelectedImageIndex],
	);

	return (
		<div className={cn(b())} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			{pictures.length > 1 && !isPrintMode && (
				<CarouselButton
					className={cn(b('', { 'button-invisible': buttonsInvisible }))}
					direction="left"
					onClick={() => onClick('left')}
				/>
			)}
			<Images selected={selectedImageIndex} imageUrls={pictures} />
			{pictures.length > 1 && !isPrintMode && (
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
