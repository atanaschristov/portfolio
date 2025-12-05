import cn from 'classnames';
import ImageCarousel from '@/components/imageCarousel/ImageCarousel';
import PersonalInfo from '@/components/personalInfo/PersonalInfo';

import { memo } from 'react';
import { useBemm as useBem } from 'bemm';

import './Header.scss';

const ImageCarouselMemoized = memo(() => {
	const b = useBem('header');
	return (
		<section className={cn(b('avatar'))}>
			<ImageCarousel />
		</section>
	);
});

const PersonalInfoMemoized = memo(() => {
	const b = useBem('header');
	return (
		<section className={cn(b('personal-info'))}>
			<PersonalInfo />
		</section>
	);
});

const Header = memo(() => {
	// memoizing the components prevents rerendering og PersonalInfo if ImageCarousel rerenders
	return (
		<>
			<ImageCarouselMemoized />
			<PersonalInfoMemoized />
		</>
	);
});

export default Header;
