import cn from 'classnames';
import ImageCarousel from '@/components/imageCarousel/ImageCarousel';
import PersonalInfo from '@/components/personalInfo/PersonalInfo';

import { memo } from 'react';
import { useBemm as useBem } from 'bemm';

import './Header.scss';

const Header = memo(() => {
	const b = useBem('header');

	return (
		<>
			<section className={cn(b('avatar'))}>
				<ImageCarousel />
			</section>
			<section className={cn(b('personal-info'))}>
				<PersonalInfo />
			</section>
		</>
	);
});

export default Header;
