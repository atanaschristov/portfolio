import cn from 'classnames';
import ImageCarousel from './imageCarousel/ImageCarousel';
import PersonalInfo from './personalInfo/PersonalInfo';

import { useBemm as useBem } from 'bemm';

import './Header.scss';

const Header = () => {
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
};

export default Header;
