import cn from 'classnames';

import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppContext } from '@/contexts/useAppContext';
import { useBemm as useBem } from 'bemm';

import './PersonalInfo.scss';

const PersonalInfo = () => {
	const b = useBem('personal-info');
	const { portfolio } = useAppContext() || {};
	const { personalInfo } = portfolio || {};

	const { name, address, role, bio, socialLinks, phone, email } = personalInfo || {};

	const renderSocialLinks = (platform: Platform, url: string) => {
		const BrandIcon = (() => {
			const IconProps = { size: '2x' as const };
			switch (platform) {
				case 'linkedin':
					return <FontAwesomeIcon {...IconProps} icon={faLinkedin} />;
				case 'github':
					return <FontAwesomeIcon {...IconProps} icon={faGithub} />;
				case 'x':
					return <FontAwesomeIcon {...IconProps} icon={faXTwitter} />;
				case 'youtube':
					return <FontAwesomeIcon {...IconProps} icon={faYoutube} />;
				default:
					return;
			}
		})();

		return (
			<a
				key={platform}
				href={url}
				target="_blank"
				rel="noopener noreferrer"
				className={cn(b('social__link'))}
			>
				{BrandIcon}
			</a>
		);
	};

	return (
		<>
			<div className={cn(b('name'))}>{name || APP_AUTHOR.name}</div>
			<div className={cn(b('role'))}>{role}</div>
			<div className={cn(b('bio'))}>{bio}</div>
			<div className={cn(b('address'))}>{address}</div>
			<div className={cn(b('contacts'))}>
				<div className={cn(b('contacts__pos'))}>
					{email || APP_AUTHOR.uname}
					<FontAwesomeIcon icon={faAt} />
					{APP_AUTHOR.domain}
				</div>
				<div className={cn(b('contacts__tf'))}>{phone || APP_AUTHOR.tf}</div>
			</div>
			{socialLinks && (
				<div className={cn(b('social'))}>
					{Object.entries(socialLinks)?.map((entry) =>
						renderSocialLinks(...(entry as [Platform, string])),
					)}
				</div>
			)}
		</>
	);
};

export default PersonalInfo;
