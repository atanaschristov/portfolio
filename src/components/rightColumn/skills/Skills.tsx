import GroupedByLevel, {
	type GroupByLevelFunction,
	type IInput,
} from '@/components/shared/groupedByLevel/GroupedByLevel';

import { useAppContext } from '@/contexts/useAppContext';
import { useCallback } from 'react';

import './Skills.scss';

const SkillGroup = {
	EXPERT: 'expert' as const,
	ADVANCED: 'advanced' as const,
	COMFORTABLE: 'comfortable' as const,
	BEGINNER: 'beginner/rusty' as const,
};

const GroupLevelUpperLimit = {
	[SkillGroup.EXPERT]: 10,
	[SkillGroup.ADVANCED]: 9,
	[SkillGroup.COMFORTABLE]: 7,
	[SkillGroup.BEGINNER]: 5,
};

type IGroupedSkills = Record<(typeof SkillGroup)[keyof typeof SkillGroup], string[]>;

const Skills = () => {
	const { portfolio } = useAppContext() || {};
	const skills = portfolio?.skills;

	//TODO Group skills by their REAL level
	const groupByLevel = useCallback((items: ISkill[]) => {
		const groupedItems: IGroupedSkills = {
			[SkillGroup.EXPERT]: [],
			[SkillGroup.ADVANCED]: [],
			[SkillGroup.COMFORTABLE]: [],
			[SkillGroup.BEGINNER]: [],
		};

		items.forEach((item) => {
			const { name, level } = item;
			if (level > GroupLevelUpperLimit[SkillGroup.ADVANCED]) {
				groupedItems[SkillGroup.EXPERT].push(name);
			} else if (level > GroupLevelUpperLimit[SkillGroup.COMFORTABLE]) {
				groupedItems[SkillGroup.ADVANCED].push(name);
			} else if (level > GroupLevelUpperLimit[SkillGroup.BEGINNER]) {
				groupedItems[SkillGroup.COMFORTABLE].push(name);
			} else {
				groupedItems[SkillGroup.BEGINNER].push(name);
			}
		});
		return groupedItems;
	}, []);

	return (
		<GroupedByLevel
			section="skills"
			input={skills as IInput[]}
			groupByLevel={groupByLevel as GroupByLevelFunction}
		/>
	);
};

export default Skills;
