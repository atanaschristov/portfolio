import GroupedByLevel, {
	type GroupByLevelFunction,
	type IInput,
} from '@/components/shared/groupedByLevel/GroupedByLevel';

import { useAppContext } from '@/contexts/useAppContext';
import { useCallback } from 'react';

import './Languages.scss';

const LanguageGroup = {
	NATIVE: 'native' as const,
	FLUENT: 'fluent' as const,
	INTERMEDIATE: 'intermediate' as const,
	BEGINNER: 'beginner' as const,
};

const ProficiencyLevel = {
	[LanguageGroup.NATIVE]: 4,
	[LanguageGroup.FLUENT]: 3,
	[LanguageGroup.INTERMEDIATE]: 2,
	[LanguageGroup.BEGINNER]: 1,
};

type IGroupedLanguages = Record<(typeof LanguageGroup)[keyof typeof LanguageGroup], string[]>;

const Languages = () => {
	const { portfolio } = useAppContext() || {};
	const languages = portfolio?.languages;

	const groupByProficiency = useCallback((items: ILanguage[]) => {
		const groupedItems: IGroupedLanguages = {
			[LanguageGroup.NATIVE]: [],
			[LanguageGroup.FLUENT]: [],
			[LanguageGroup.INTERMEDIATE]: [],
			[LanguageGroup.BEGINNER]: [],
		};

		items.forEach((item) => {
			const { name, level } = item;
			groupedItems[level].push(name);
		});
		return groupedItems;
	}, []);

	return (
		languages && (
			<GroupedByLevel
				section="languages"
				input={languages as IInput[]}
				groupByLevel={groupByProficiency as GroupByLevelFunction}
				levelMapping={ProficiencyLevel}
				maxLevel={ProficiencyLevel[LanguageGroup.NATIVE]}
			/>
		)
	);
};

export default Languages;
