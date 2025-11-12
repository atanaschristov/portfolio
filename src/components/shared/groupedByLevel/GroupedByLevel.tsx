import cn from 'classnames';
import ProgressBar from '@/components/shared/progressBar/ProgressBar';

import { useCallback, useEffect, useState } from 'react';
import { useBemm as useBem } from 'bemm';

import './GroupedByLevel.scss';

export interface ILevelGrouped {
	[level: number]: string[];
}

export interface IInput {
	name: string;
	level: number | string;
}

export type GroupByLevelFunction = (input: IInput[]) => ILevelGrouped;

interface GroupedByLevelProps {
	input: IInput[];
	groupByLevel: GroupByLevelFunction;
	levelMapping?: Record<string, number>;
	section: string;
	maxLevel?: number;
}

const GroupedByLevel = ({
	groupByLevel,
	input,
	levelMapping,
	section,
	maxLevel,
}: GroupedByLevelProps) => {
	const b = useBem(section);
	const [levelGroups, setLevelGroups] = useState<ILevelGrouped | undefined>(undefined);

	const renderGroupElements = useCallback((groupElement: string) => {
		return (
			<div className={cn('group-title-element')} key={groupElement}>
				{/* <div className={cn('tooltip')}>
					<span>{input.find((item) => item.name === groupElement)?.level}</span>
					<span className="color"></span>
				</div> */}
				<div className={cn('value')}>{groupElement}</div>
			</div>
		);
	}, []);

	const renderGroups = useCallback(([level, group]: [string, string[]]) => {
		let numericLevel = 0;
		if (levelMapping) {
			numericLevel = levelMapping ? levelMapping[level] : Number(level);
		} else {
			numericLevel = input.find((item) => item.name === group[0])?.level as number;
		}
		// console.log('Rendering group for level:', level, 'with numeric level:', numericLevel);
		return (
			group &&
			group.length > 0 && (
				<div className={cn(b('group'), 'group')} key={level}>
					<div className={cn(b('title'), 'group-title')}>
						{group.map((item) => renderGroupElements(item))}
					</div>
					<ProgressBar level={numericLevel} maxLevel={maxLevel} label={level} />
				</div>
			)
		);
	}, []);

	useEffect(() => {
		setLevelGroups(groupByLevel(input));
	}, [groupByLevel, input]);

	return (
		levelGroups &&
		Object.keys(levelGroups).length && (
			<div className={cn(b())}>
				{Object.entries(levelGroups).map((entry) => renderGroups(entry as [string, string[]]))}
			</div>
		)
	);
};

export default GroupedByLevel;
