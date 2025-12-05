import ViewPrintContent from '@/components/viewPrintMode/PrintContent';
import ViewPrintManager from '@/components/viewPrintMode/PrintManager';
import ViewWeb from '@/components/viewWeb/ViewWeb';

import { AppContext } from '@/contexts/useAppContext.tsx';
import { memo, useCallback, useMemo, useState } from 'react';
import { PrintModeContext } from '@/contexts/usePrintModeContext';

import '@/components/App.scss';
import { AvatarImageContext } from '@/contexts/useAvatarImageContext';

interface AppProps {
	portfolioData: IPortfolio;
	generatedAt: string | number;
}

const App = memo(({ portfolioData, generatedAt }: AppProps) => {
	const [isPrintMode, setPrintMode] = useState<boolean>(false);
	const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

	const onPrintEnd = useCallback(() => setPrintMode(false), []);
	const onPrintStart = useCallback(() => setPrintMode(true), []);

	const generatedAtDate = useMemo(() => new Date(generatedAt), [generatedAt]);

	const appContext = useMemo(
		() => ({
			portfolio: portfolioData!,
			generatedAt: generatedAtDate,
		}),
		[portfolioData, generatedAtDate],
	);

	const selectedImageState = useMemo(
		() => ({ selectedImageIndex, setSelectedImageIndex }),
		[selectedImageIndex, setSelectedImageIndex],
	);

	return (
		<AppContext.Provider value={appContext}>
			<AvatarImageContext.Provider value={selectedImageState}>
				<ViewWeb togglePrintMode={onPrintStart} />
				<PrintModeContext.Provider value={{ isPrintMode }}>
					{isPrintMode && (
						<ViewPrintManager onPrintEnd={onPrintEnd}>
							<ViewPrintContent />
						</ViewPrintManager>
					)}
				</PrintModeContext.Provider>
			</AvatarImageContext.Provider>
		</AppContext.Provider>
	);
});

export default App;
