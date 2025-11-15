declare const APP_AUTHOR: { name: string; uname: string; domain: string; tf: string };
declare const APP_VERSION: string;
declare const BASE_DATA_URL: string;
declare const PORTFOLIO_PATH: string;

type Platform =
	| 'linkedin'
	| 'github'
	| 'twitter'
	| 'x'
	| 'facebook'
	| 'instagram'
	| 'tikTok'
	| 'youtube';

type Direction = 'left' | 'right';

type LanguageProficiency = 'native' | 'fluent' | 'intermediate' | 'beginner';

interface IPeriod {
	start: string;
	end: string;
}

interface IPersonalInfo {
	name: string;
	role: string;
	bio: string;
	address?: string;
	pictures?: string[];
	socialLinks?: { [platform in Platform]?: string };
	email?: string;
	phone?: string;
}

interface IEducationSection {
	id: string;
	degree: string;
	institution: string;
	period: IPeriod;
	url?: string;
	subjects?: string[];
}

interface IProject {
	id: string;
	name: string;
	description?: string;
	technologies?: string[];
	repo?: string;
	url?: string;
}

interface IExperienceSection {
	id: string;
	company: string;
	position: string;
	period: IPeriod;
	companyUrl?: string;
	responsibilities?: string[];
	projects?: IProject[];
}

interface ISkill {
	name: string;
	level: number;
}

interface ILanguage {
	name: string;
	level: LanguageProficiency;
}

interface IPortfolio {
	personalInfo: IPersonalInfo;
	education: IEducationSection[];
	experience: IExperienceSection[];
	personalProjects: IProject[];
	skills: ISkill[];
	languages?: ILanguage[];
	interests?: string[];
	disclaimer?: string;
}

interface IAppContext {
	portfolio: IPortfolio;
	generatedAt: Date;
}

interface IListIndexData {
	generated: string;
	generatedAt: string;
	data: string[];
	images: string[];
}
