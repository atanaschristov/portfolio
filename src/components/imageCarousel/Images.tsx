import cn from 'classnames';

import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useBemm as useBem } from 'bemm';

import './Images.scss';
import AvatarFallback from './AvatarFallback';

interface ImagesProps {
	selected: number;
	imageUrls: string[];
	direction?: Direction;
}

const STEP = 128;

const Image = memo(({ selected, imageUrls }: ImagesProps) => {
	const b = useBem('images');
	const recalculatePositions = useCallback((selected: number) => {
		const newPositions: number[] = [];
		imageUrls.forEach((_, index) => {
			const relativeIndex = (index - selected + imageUrls.length) % imageUrls.length;
			newPositions[index] = relativeIndex * STEP;
		});

		return newPositions;
	}, []);

	const [positions, setPositions] = useState(recalculatePositions(selected));

	const images = useMemo(() => {
		if (!imageUrls || imageUrls.length === 0) return [<AvatarFallback key="avatar-fallback" />];
		return imageUrls.map((url, index) => {
			return (
				<div className={cn(b('image'))} style={{ left: positions[index] }} key={url}>
					<img src={`${BASE_DATA_URL}${url}`} alt="Personal Image" />
				</div>
			);
		});
	}, [positions]);

	useEffect(() => {
		setPositions(recalculatePositions(selected));
	}, [selected]);

	return <div className={cn(b())}>{images}</div>;
});

export default Image;
